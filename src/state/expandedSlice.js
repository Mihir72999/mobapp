import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";

const createAddapter = createEntityAdapter({
    sortComparer:(a,b)=>b.id.localeCompare(a.id),
    selectId:(data)=>data.id
})

const initialState = createAddapter.getInitialState()

export const expandedSlice = productSlice.injectEndpoints({
    endpoints:builder=>({
        getProduct:builder.query({
            query:()=>({
              url:'getProduct',
              method:'GET',
             
            }),
            
            transformResponse:res=>{
                if(res?.message){ 
                    return res}else{
                        const data = res?.map(product=>{
                            if(!product?.qtyItem) product.qtyItem = 1
                            return product   

                        })
                        return createAddapter.setAll(initialState ,data)
                    }
            },
            
            transformErrorResponse:(response)=>response.data,
            providesTags:(result)=>{
                if(result?.ids){
                   const tag = [
                        {type:'Product',id:'List'},
                        ...result.ids.map(id=>({type:'Product',id}))
                    ]

                     return tag
                }else{
                  return  [{type:'Product',id:'List'}]
                }
                  
            },
            
        })
    })
})

export const {useGetProductQuery } = expandedSlice
export const productData = expandedSlice.endpoints.getProduct.select()
 const productAPi = createSelector(
    productData,
    postResponse=> postResponse.data
)

export const {selectAll:productDatas , selectById:productById} = createAddapter.getSelectors(state=>productAPi(state) ?? initialState)