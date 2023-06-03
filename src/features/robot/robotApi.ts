import { apiSlice } from '../api/apiSlice'

export const robotApi = apiSlice.injectEndpoints({
  endpoints: (builder:any) => ({
    getBlogs: builder.query({
      query: () => ({
        url: '/blogs',
        method: 'GET',
      }),
      keepUnusedDataFor: 60,
      providesTags: ['Blogs'],
    }),
    getBlog: builder.query({
      query: (id:any) => ({
        url: `/blogs/${id}`,
        method: 'GET',
      }),
    }),
    addBlog: builder.mutation({
      query: (data:any) => ({
        url: '/blogs',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Blogs'],
    }),
    updateBlog: builder.mutation({
      query: ({ id, data }:any) => ({
        url: `/blogs/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Blogs'],
    }),
    deleteBlog: builder.mutation({
      query: (id:any) => ({
        url: `/blogs/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Blogs'],
    }),
  }),
})

export const {
  useGetBlogsQuery,
  useGetBlogQuery,
  useAddBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = robotApi
