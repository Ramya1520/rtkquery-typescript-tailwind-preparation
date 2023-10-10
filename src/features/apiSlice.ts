import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://retoolapi.dev/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "xFgEwq/data",
    }),
    signUp: builder.mutation({
      query: (body) => ({
        url: "xFgEwq/data",
        method: "POST",
        body: body,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err: any) {
          console.error(err);
        }
      },
    }),
  }),
  // endpoints: (builder) => ({
  //   getAllProducts: builder.mutation({
  //     query: (body) => ({
  //       url: "xFgEwq/data",
  //       method: "GET",
  //     }),
  //   }),
  // }),
});

// export const { useGetAllProductsMutation } = productApi;
export const { useGetAllProductsQuery, useSignUpMutation } = productApi;
