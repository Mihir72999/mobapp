import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    token:null,
    user:{}

}
const authSlice = createSlice({
    name:'auth' ,
    initialState,
    reducers:{
        setCredetial(state, action){
            const {accessToken} = action.payload
            
            state.token = accessToken
        },
        logOut(state ){
         state.token = null
        },
        userDetail(state ,action){
           state.user = action.payload 
        }
    }
})

export default authSlice.reducer
export const {setCredetial , logOut , userDetail} = authSlice.actions
