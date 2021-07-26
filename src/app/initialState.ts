interface IInitialState {
  auth: {
    status: string;
    data: {
      userName: string | null;
      avatarUrl: string | null;
    };
    accessToken: string | null;
  };
  repositories: {
    status: string;
    total: number | null;
    resultsPerPage: number;
    query: string | null;
    currentPage: number;
    data: [];
  };
  theme: string;
}

const getStatePartFromLocalStorage = (statePart: string) => {
  const isDataInLocalSorage = localStorage.getItem(statePart);
  return isDataInLocalSorage ? JSON.parse(isDataInLocalSorage) : null;
};

export const createInitialState = () => {
  const userData = getStatePartFromLocalStorage('auth');
  const auth = {
    status: userData ? 'fulfilled' : 'idle',
    data: {
      userName: userData ? userData.data.userName : null,
      avatarUrl: userData ? userData.data.avatarUrl : null,
    },
    accessToken: userData ? userData.accessToken : null,
  };

  const repositoriesData = getStatePartFromLocalStorage('repositories');
  const repositories = {
    status: repositoriesData ? 'fulfilled' : 'idle',
    total: repositoriesData ? repositoriesData.total : null,
    resultsPerPage: 25,
    query: repositoriesData ? repositoriesData.query : null,
    currentPage: repositoriesData ? repositoriesData.currentPage : 1,
    data: repositoriesData ? repositoriesData.data : [],
  };

  const themeData = localStorage.getItem('theme');
  const theme = themeData ? themeData : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  return { auth, repositories, theme };
};

export const initialState: IInitialState = createInitialState();
