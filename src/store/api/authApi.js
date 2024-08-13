import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import routes from '../../routes';
import normalizeUserData from '../../tools/dataParsers/normalizeUserData';

export const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: routes.serverAuth,
    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().credentials;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      } else {
        headers.delete('authorization');
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // testing
    loginUser: builder.mutation({
      query: (userData) => ({
        url: '/login',
        method: 'POST',
        body: userData,
      }),
      transformResponse: (response) => normalizeUserData('auth', response),
    }),
    getCurrent: builder.query({
      query: () => '/me',
      transformResponse: (response) => normalizeUserData('findMe', response),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useLazyGetCurrentQuery,
} = usersApi;
