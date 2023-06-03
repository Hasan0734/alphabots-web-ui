import { apiSlice } from '../api/apiSlice'
import { userLoggedIn, userLoggedOut } from './authSlice'

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder:any) => ({
    login: builder.mutation({
      query: (data:any) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg:any, { queryFulfilled, dispatch }:any) {
        try {
          const result = await queryFulfilled
          dispatch(userLoggedIn(result?.data))
        } catch (error) {
          console.log({ error })
        }
      },
    }),
    register: builder.mutation({
      query: (data:any) => ({
        url: '/auth/register',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg:any, { queryFulfilled, dispatch }:any) {
        try {
          const result = await queryFulfilled
          dispatch(userLoggedIn(result?.data))
        } catch (error) {
          console.log({ error })
        }
      },
    }),
    loggedInInfo: builder.query({
      query: () => ({
        url: '/auth/login_info',
        method: 'GET',
      }),
      async onQueryStarted(arg:any, { queryFulfilled, dispatch }:any) {
        try {
          const result = await queryFulfilled
          dispatch(userLoggedIn(result?.data))
        } catch (error) {
          console.log({ error })
        }
      },
    }),
    logout: builder.query({
      query: () => ({
        url: '/auth/logout',
        method: 'GET',
      }),
      async onQueryStarted(arg:any, { queryFulfilled, dispatch }:any) {
        try {
          await queryFulfilled
          dispatch(userLoggedOut())
        } catch (error) {
          console.log({ error })
        }
      },
    }),
    getActiveSessions: builder.query({
      query: (userId:any) => ({
        url: `/auth/sessions/${userId}`,
        method: 'GET',
      }),
      transformResponse(apiResponse:any) {
        // return apiResponse?.data
        return apiResponse
      },
    }),
    // deactivateSession: builder.mutation({
    //   query: ({ userId, sessionId }) => ({
    //     url: `/auth/sessions/${sessionId}`,
    //     method: 'PUT',
    //   }),
    //   async onQueryStarted(
    //     { userId, sessionId },
    //     { queryFulfilled, dispatch, getState }
    //   ) {
    //     try {
    //       const session = await queryFulfilled
    //       // Logout Current User If Deactivated Session is Current User
    //       const { auth }:any = getState()

    //       if (auth?.user?.session === session?.data?._id) {
    //         dispatch(userLoggedOut())
    //       }

    //       dispatch(
    //         apiSlice.util.updateQueryData(
    //           'getActiveSessions',
    //           userId,
    //           (draft:any) => {
    //             const index = draft.findIndex((item:any) => item._id == sessionId)
    //             draft.splice(index, 1)
    //           }
    //         )
    //       )
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   },
    // }),
  }),
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useLoggedInInfoQuery,
  useLogoutQuery,
  useGetActiveSessionsQuery,
  // useDeactivateSessionMutation,
} = authApi
