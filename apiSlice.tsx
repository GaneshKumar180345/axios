import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";


export const apiSlice = createApi({
    reducerPath : 'api',
    baseQuery : fetchBaseQuery({ baseUrl : 'https://fakestoreapi.com/' }),
    endpoints : (builder)=>({
        getProduct : builder.query({
            query : () => 'products'
        }),
        getProductCategory : builder.query({
            query : () => 'categories'
        }),
        getProductPaging : builder.query({
            query : (page = 3) => `products?limit=${page}`
        })
    })
})

export const { useGetProductQuery } = apiSlice
export const { useGetProductCategoryQuery } = apiSlice 
export const { useGetProductPagingQuery } = apiSlice