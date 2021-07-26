import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import axios from 'axios';
import { toast } from 'react-toastify';
import { initialState } from './initialState';

type InnerProps = {
  query?: string;
  currentPage?: number;
};

type ResponseType = {
  data: {
    total_count: number;
    items: [];
  };
};

type ThunkReturnType = {
  response: ResponseType;
  urlQuery: string | null;
  currentPage: number;
};

export const fetchRepositoriesFromApi = createAsyncThunk<ThunkReturnType, InnerProps, { state: RootState }>(
  'repositories/fetch',
  async ({ query, currentPage = 1 }, { getState }) => {
    const {
      auth: { accessToken },
      repositories: { resultsPerPage, query: defaultQuery },
    } = getState();
    const urlQuery = query ? query : defaultQuery;

    const url: URL = new URL('https://api.github.com/search/repositories?q=&page=&per_page=');

    if (urlQuery && currentPage && resultsPerPage) {
      url.searchParams.set('q', `${urlQuery}in:name`);
      url.searchParams.set('page', String(currentPage));
      url.searchParams.set('per_page', String(resultsPerPage));
    }

    try {
      const response = await axios.get(url.href, {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      });
      localStorage.setItem(
        'repositories',
        JSON.stringify({
          total: response.data.total_count,
          query: urlQuery,
          currentPage: currentPage,
          data: response.data.items,
        }),
      );
      return { response, urlQuery, currentPage };
    } catch (error) {
      toast.error(error.message);
      throw new Error(error.message);
    }
  },
);

const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState: initialState.repositories,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRepositoriesFromApi.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(fetchRepositoriesFromApi.fulfilled, (state, { payload: { urlQuery, currentPage, response } }) => {
      state.status = 'fulfilled';
      state.query = urlQuery;
      state.currentPage = currentPage;
      state.data = response.data.items;
      state.total = response.data.total_count;
    });
    builder.addCase(fetchRepositoriesFromApi.rejected, (state) => {
      state.status = 'rejected';
    });
  },
});

export const selectStatus = ({ repositories: { status } }: RootState) => status;
export const selectRepositoriesData = ({ repositories: { data } }: RootState) => data;
export const selectCurrentPage = ({ repositories: { currentPage } }: RootState) => currentPage;
export const selectNumberOfPages = ({ repositories: { total, resultsPerPage } }: RootState) => {
  if (!total) return 0;
  return total / resultsPerPage > 40 ? 40 : Math.ceil(total / resultsPerPage);
};

export default repositoriesSlice.reducer;
