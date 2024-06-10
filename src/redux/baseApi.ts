import {
    fetchBaseQuery,
    type BaseQueryFn,
    type FetchArgs,
    type FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const baseQuery = fetchBaseQuery({
    baseUrl: `${baseUrl}`,
    prepareHeaders: (headers) => {
        const token = sessionStorage.getItem("amtil_authToken");
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        headers.set("Accept", "application/json");
        return headers;
    },
});

export const baseQueryWithInterceptor: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const result: any = await baseQuery(args, api, extraOptions);

    if (result.error?.status === 401 || result.error?.originalStatus === 401) {
        sessionStorage.removeItem("token");
    }
    if (result.error?.status === 403 || result.error?.originalStatus === 403) {
        window.location.href = "/";
    }
    return result;
};

