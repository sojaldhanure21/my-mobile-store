import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export interface HotelRoomsResponse {
    rooms: any[];
}

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (builder) => ({
    }),
});

export const { } = api;