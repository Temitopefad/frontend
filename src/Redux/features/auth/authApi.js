import {createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { getBaseUrl } from "../../../utils/baseURL"

const authApi = createApi({
reducerPath : "auth/Api",
baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/auth`,
    credentials : "include",
}),
tagTypes: ["User"],


 endpoints: (builder) => ({
    registerUser: builder.mutation({
        query: (newUser) => ({
            url: "/register",
            method: 'POST',
            body: newUser,
        })
        
        }),
            loginUser: builder.mutation({
                query: (credentials) => ({
                    url: "/login",
                    method: 'POST',
                    body: credentials,

                })
            }),
            logoutUser: builder.mutation({
                query: () => ({
                    url: "/logout",
                    method: 'POST',
                })
                }),
                getUser: builder.query({
                    logoutUser: builder.mutation({
                        query: () => ({
                            url: "/users",
                            method: 'GET',
                            }),
                            refetchOnMount: true,
                            invalidatesTags: ['user'],

                            
                        }),
 deleteUser: builder.mutation({
    query: (userId) => ({
        url: `/users/${id}`,
        method: 'DELETE',
        }),
        invalidatesTags:['users'],
            }),
            updateUserRole: builder.mutation({
                query: ({userId, updateUserRole}) => ({
                    url: `/users/${id}`,
                    method: 'PUT',
                    body: {role}
                    }),
                    refetchOnMount: true,
                    invalidatesTags: ['user'],
            }),

editProfile: builder.mutation({
    query: (profileData) => ({
        url: "/edit-profile",
        method: 'PATCH',
        body: profileData,
        }),
    })

                        })
 })
})
     export const { useRegisterUserMutation,useLoginUserMutation, useLogoutUserMutation, UseGetUserQuery, useDeleteUserMutation, useUpdateUserRoleMutation, useEditProfileMutation } = authApi
     export default authApi;