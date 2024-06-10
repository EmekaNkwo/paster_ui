/* eslint-disable no-mixed-spaces-and-tabs */
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithInterceptor } from "../baseApi";

export const uploadApi = createApi({
    reducerPath: "upload",
    baseQuery: baseQueryWithInterceptor,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: 20,
    tagTypes: ["Upload"],
    endpoints: (builder) => ({
        uploadText: builder.mutation({
            query: (body) => ({
                url: "",
                body,
                method: "POST",
            }),
            invalidatesTags: ["Upload"],
        }),
        uploadFile: builder.mutation({
            query: (body) => ({
                url: "",
                body,
                method: "POST",
            }),
            invalidatesTags: ["Upload"],
        }),

    }),
});

export const {
    useUploadTextMutation,
    useUploadFileMutation
} = uploadApi;
