
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";


const createAddapter = createEntityAdapter({
  selectId:data=> data.id ?? data })

const ininitalState = createAddapter.getInitialState()

export const brandmodelSlice = productSlice.injectEndpoints({
  endpoints:builder=>({
    getBrandmodel :builder.query({
        query:()=>({
          url:'getBrandmodel',
          method:'GET',
          headers:{
            Accept:'application/json',
            'Content-Type': 'application/json'}
        }),
        transformResponse: res=>{
           
             return createAddapter.setAll(ininitalState , res)
        },
        providesTags:(response)=>{
          if(response?.ids){
            const tags = [
              {type:'Brandmodel' , id:'List'},
              ...response.ids.map(id=>({type:'Brandmodel' , id}))
            ]
            return tags
          }else{
            return [{type:'Brandmodel' , id:'List'}]
          }

        }
            
            
    })
  })  
})
export const brandmodelData = brandmodelSlice.endpoints.getBrandmodel.select()
const allBrandmodel = createSelector(
    brandmodelData,
    responseData =>responseData.data
)
export const  {selectAll:selectBrandmodel , selectTotal} = createAddapter.getSelectors((state)=>allBrandmodel(state) ?? ininitalState)
export const {useGetBrandmodelQuery} = brandmodelSlice