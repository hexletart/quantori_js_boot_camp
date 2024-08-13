/* eslint-disable no-param-reassign */
import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'authed',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.isAuthed = true;
      const { token, user } = payload;
      if (!_.isUndefined(token)) {
        state.token = token;
      } if (!_.isUndefined(user)) {
        state.user = { ...state.user, ...user };
      }
    },
    resetCredentials: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthed = false;
    },

  },
});

export const { actions } = authSlice;
export default authSlice.reducer;
