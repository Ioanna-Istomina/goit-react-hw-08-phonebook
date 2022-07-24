import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import localStorage from 'redux-persist/es/storage';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',

    prepareHeaders: headers => {
      const res = localStorage.getItem('user');

      if (!res) {
        return headers;
      }

      const token = JSON.parse(res).token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
        return headers;
      }
      return headers;
    },
  }),
  tagTypes: ['Contacts', 'Users'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    addContacts: builder.mutation({
      query: contact => ({
        url: '/contacts',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    addUser: builder.mutation({
      query: user => ({
        url: '/users/signup',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Users'],
      transformResponse: result => {
        localStorage.setItem('user', JSON.stringify(result));
      },
    }),
    authorizeUser: builder.mutation({
      query(user) {
        return {
          url: `users/login`,
          method: 'POST',
          body: user,
        };
      },
      invalidatesTags: ['Users'],
      transformResponse: result => {
        localStorage.setItem('user', JSON.stringify(result));
      },
    }),
    logOutUser: builder.mutation({
      query() {
        return {
          url: `users/logout`,
          method: 'POST',
        };
      },
      invalidatesTags: ['Users'],
      transformResponse: () => {
        localStorage.setItem('user', '');
      },
    }),
    getUser: builder.query({
      query() {
        return {
          url: `users/current`,
        };
      },
      providesTags: ['Users'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactsMutation,
  useDeleteContactMutation,
  useAddUserMutation,
  useAuthorizeUserMutation,
  useLogOutUserMutation,
  useGetUserQuery,
} = contactsApi;
