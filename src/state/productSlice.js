import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

   const baseQuery = fetchBaseQuery({
    baseUrl:'https://mobilecoverapi.onrender.com/',
    credentials:'include',
    prepareHeaders:async(headers,{getState})=>{
        
        const token = await getState().auth.token
       
        if(token){
            
            headers.set('Authorization',`Bearer${token}`)
        }
        return headers
    }
    })
    

export const productSlice = createApi({
    reducerPath:'productSlice',
    baseQuery,
    tagTypes:['Product','Brandmodel'],
    endpoints:()=>({})  
})

