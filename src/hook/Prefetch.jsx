import { productSlice } from "../state/productSlice";
import { store } from "../state/store";
import {  Outlet, Navigate} from "react-router-dom";
import { useGetUserQuery } from "../state/authAdaptor";
import { useEffect , useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { useGetProductQuery } from "../state/expandedSlice";
import { useGetBrandmodelQuery } from "../state/brandmodelSlice";

let content;
const Prefetchs = () =>{
  const [progress , setProgress] = useState(0)  
    const { data , status } = useGetUserQuery('UserList')
       useGetProductQuery()
        useGetBrandmodelQuery()

 useEffect(() =>{
    setProgress(100)
    store.dispatch(productSlice.util.prefetch('getProduct' , 'Product' , {force:true}))
  store.dispatch(productSlice.util.prefetch('getBrandmodel' , 'Brandmodel' , {force:true}))

},[])
if(status === 'pending'){
  return <LoadingBar
  color="#f11946"
  height={8}
  progress={progress}
 onLoaderFinished={()=>setProgress(0)}
  />
}

 if(status === 'fulfilled'){
  return content = <Outlet/>
 }
  
if(status === 'rejected'){
     return  <Navigate to={'/login'}  replace={true} />
}

  
content = (
  <div className="flex flex-col justify-center my-10 items-center ">
    <span>your Sesson has been expired </span>
    <Navigate to={'/login'}  replace={true} >
    <button
    className="bg-blue-600 text-white py-3 px-5 my-3 rounded-md"
    >login again</button>
  </Navigate>
  </div>
)
return content

}



export default Prefetchs

    
 

 

