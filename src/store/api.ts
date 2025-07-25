import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export interface HotelRoomsResponse {
    rooms: any[];
}

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000", // Use http and correct the URL
        prepareHeaders: async (headers) => {
            headers.set('Accept', 'application/json')
            headers.set('Content-Type', 'application/json; charset=UTF-8')
            return headers
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation<any, any>({
            query: (credentials) => ({
                url: "/login",
                method: "POST",
                body: credentials,
            }),
        }),
        signUp: builder.mutation<any, any>({
            query: (credentials) => ({
                url: '/signup',
                method: 'POST',
                body: credentials
            }),
        }),
    })
})

export const { useLoginMutation, useSignUpMutation } = api;