import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import firebase from 'firebase';
import { auth } from '../config/firebase';
import { toast } from 'react-toastify';
import { initialState } from './initialState';

export const authWithSocialMedia = createAsyncThunk('auth/signIn', async (provider: firebase.auth.AuthProvider) => {
  try {
    const { user, credential } = await auth.signInWithPopup(provider);
    const { accessToken = null } = credential as firebase.auth.OAuthCredential;
    const { displayName, photoURL } = user as firebase.User;
    const results = { data: { userName: displayName, avatarUrl: photoURL }, accessToken };
    localStorage.setItem(
      'auth',
      JSON.stringify({
        data: results.data,
        accessToken: results.accessToken,
      }),
    );
    return results;
  } catch (error) {
    toast.error(error.message);
    throw new Error(error.message);
  }
});

export const userSignOut = createAsyncThunk('auth/signOut', async () => {
  try {
    await auth.signOut();
    localStorage.removeItem('repositories');
    localStorage.removeItem('auth');
  } catch (error) {
    toast.error(error.message);
    throw new Error(error.message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState.auth,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authWithSocialMedia.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(authWithSocialMedia.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.data = action.payload.data;
      state.accessToken = action.payload.accessToken;
    });
    builder.addCase(authWithSocialMedia.rejected, (state) => {
      state.status = 'rejected';
    });
    builder.addCase(userSignOut.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(userSignOut.fulfilled, (state) => state);
    builder.addCase(userSignOut.rejected, (state) => {
      state.status = 'rejected';
    });
  },
});

export const selectStatus = ({ auth: { status } }: RootState) => status;
export const selectUserData = ({ auth: { data } }: RootState) => data;
export const selectAccessToken = ({ auth: { accessToken } }: RootState) => accessToken;
export const selectIsUserSignedIn = ({
  auth: {
    data: { avatarUrl, userName },
    accessToken,
  },
}: RootState) => Boolean(accessToken && avatarUrl && userName);

export default authSlice.reducer;
