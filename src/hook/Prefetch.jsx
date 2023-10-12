import { productSlice } from "../state/productSlice";
import { store } from "../state/store";
import {  Outlet, useNavigate} from "react-router-dom";
import { useGetUserQuery } from "../state/authAdaptor";
import { useEffect , memo, useState } from "react";
import LoadingBar from "react-top-loading-bar"

const Prefetch = () =>{
  const [progress , setProgress] = useState(0)  
    const { data , status } = useGetUserQuery('UserList')

const navigate = useNavigate() 

 useEffect(() =>{
    setProgress(100)
    store.dispatch(productSlice.util.prefetch('getProduct' , 'ProductList' , {force:true}))
  store.dispatch(productSlice.util.prefetch('getBrandmodel' , 'BrandmodelList' , {force:true}))

},[data?.useName ,data?.email])
if(status === 'pending'){
  return <LoadingBar
  color="#f11946"
  height={8}
  progress={progress}
 onLoaderFinished={()=>setProgress(0)}
  />
}

const content = (
  <div className="flex flex-col justify-center my-10 items-center ">
    <div>your Sesson has been expired</div>
    <button
    className="bg-blue-600 text-white py-3 px-5 my-3 rounded-md"
    onClick={()=>navigate('/login'  ,{replace:true , relative:'path'})}>login again</button>
  </div>
)
return data && !data.message ? <Outlet/> : content
}

const Prefetchs = memo(Prefetch)
export default Prefetchs

    
 

 

