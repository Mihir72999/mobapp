import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    token:null

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
        }
    }
})

export default authSlice.reducer
export const {setCredetial , logOut} = authSlice.actions