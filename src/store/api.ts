import { getApiParams } from "@/hooks/getApiParams/getApiParams";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface HotelRoomsResponse {
    rooms: any[];
}

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://orchestrator.api.dev.tripsby.ai" }),
    endpoints: (builder) => ({
// created one api endpoint for refrence
        fetchHotelRooms: builder.query<HotelRoomsResponse, void>({
            queryFn: async () => {
                try {
                    const url = "/api/hotels/39625193/b20f5e0a-54d3-4916-ac26-3be90fd50f5d/rooms";
                    const data = await getApiParams(url);
                    return { data };
                } catch (error) {
                    return { error: { status: "FETCH_ERROR", error: (error as Error).message } };
                }
            },
        }),
    }),
});

export const { useFetchHotelRoomsQuery } = api;