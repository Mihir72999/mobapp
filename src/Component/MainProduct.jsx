 import { useSelector } from "react-redux"
 import { productDatas, useGetProductQuery } from "../state/expandedSlice"
 import { Link } from "react-router-dom"
 import { FcHome } from 'react-icons/fc'
 import { LiaProductHunt } from 'react-icons/lia'
import Formate from "./Formate"
import { LazyLoadImage } from "react-lazy-load-image-component"
import ReactLog from "./Log"


const MainProduct = () => {

 
  const {isSuccess  , isError , error } = useGetProductQuery('ProductList')
  
   const product = useSelector(productDatas)
 
   const onError = ReactLog.LogItem(isError)
   
  

    

 
 if(onError){
  return <strong>...went something wrong from us or check your internet connection , {error?.message  }</strong>
 }

 
    return (
    <section>
   
   
   <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <li>
              <div className="flex items-center">
                <Link to='/main' className="mr-2 text-sm font-medium text-gray-900"><FcHome /></Link>
                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <a  className="mr-2 text-sm font-medium text-gray-900"><LiaProductHunt /></a>
              
              </div>
            </li>

          </ol>
        </nav>
      <div className="flex justify-center items-center">  
   <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
 
  {isSuccess && product.map(({name,id,price,image} , index  )=>{
   
    return <div key={index} className ='flex bg-zinc-100 justify-center mx-1  my-3 w-[250px]'>
   <div className="flex flex-col  justify-center items-center ">
   <LazyLoadImage src={image}
                      
                      width={150}
                      height={300}
                      alt="Image Alt"
                    />
    <span className='px-2'>{name}</span>
    <span className='flex items-center'><strong>Price:</strong>{Formate(price)}</span>
    <Link to={`/product/${id}?name=${name}`} className='bg-sky-500 py-2 px-10 rounded-md text-white' >Add to Cart</Link> 
    </div>
    </div>
  })}
   </div>
   </div>        
    </section>
  )
} 
export default MainProduct
