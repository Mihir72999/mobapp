import {  createEntityAdapter,  createSlice } from "@reduxjs/toolkit";
const cartAddapter = createEntityAdapter()



const addSlice = createSlice({
    name:'addSlice',
   initialState:cartAddapter.getInitialState({ cartItem:false }),
   reducers:{
    addToCart(state , action){
        const id = action.payload.map(e=>e.id)
        const itemExist = state.entities[id]
         
       if(itemExist && itemExist.brandmodel){
           itemExist.qty += 1
           itemExist.price += itemExist.price 
        
    }else{
        cartAddapter.addMany(state,action.payload)
 }
    },
    deleteCart(state,action){
    const {id } = action.payload
     cartAddapter.removeOne(state , id)
    },
    showCart(state){
    state.cartItem =  !state.cartItem    
    },
    clearCart(state){
    cartAddapter.removeAll(state)
    }
   }

})
export const {selectAll , selectById} = cartAddapter.getSelectors(state=>state.cart)

export const {addToCart ,deleteCart , showCart , clearCart } = addSlice.actions
export default addSlice.reducer    