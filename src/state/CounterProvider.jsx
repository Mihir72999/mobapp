
import { createContext, useContext, useReducer } from "react";

const initialState = {
    count:0,
    data:[]
}
 const CounterContex = createContext()
// eslint-disable-next-line react/prop-types
const CounterProvider = ({children}) =>{
    const reducer = (state,action)=>{
        switch(action.type){
            case"INCREMENT":
            return {
                ...state , count: state.count + 1 }
            case"GETTICKET":
                 return{
                  ...state ,
                  data:[...state.data , action.payload]
                 }
             case"DELETTICKET":
             
             return{
                ...state ,
                 data:[ ...state.data.filter(e=>e.idx !== action.payload)]                
             }    
            default:
                return state
            }
        }
const [state,dispatch] = useReducer( reducer , initialState )


 return <CounterContex.Provider value={{...state , dispatch}}>{children}</CounterContex.Provider>
}

 const CounterGlobalHook = () =>{
    return useContext(CounterContex)
}
export default CounterProvider
export {CounterGlobalHook , CounterContex}