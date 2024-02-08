 import { useSelector } from "react-redux"
 import { productDatas , useGetProductQuery} from "../state/expandedSlice"
 import { useGetBrandmodelQuery } from "../state/brandmodelSlice"
 import { Link } from "react-router-dom"
 import { FcHome } from 'react-icons/fc'
 import { LiaProductHunt } from 'react-icons/lia'
 import useTitle from "../hook/useTitle"
 import { ProductCard } from "./ProductCard"
 import Pagination from "./Pagination"
 import { useState } from "react"



const MainProduct = () => {
// state for pagination   
const [to ,setTo] = useState(0)
const[from , setFrom] = useState(10)
const [page ,setPage] = useState(1)
 
  // Fetch product data from Redux store
  const product = useSelector(productDatas)
  
   // Set the page title using the custom hook
    useTitle("Product")

                        useGetProductQuery('Product')
                        useGetBrandmodelQuery('BrandmodelList')      

 
    return (
    <section>
   
    {/* Breadcrumb navigation */}
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
              <a className="mr-2 text-sm font-medium text-gray-900">  <LiaProductHunt /> </a>
              </div>
            </li>

          </ol>
        </nav>
        
   <div className='flex flex-wrap mx-auto mt-6 w-[70vw]'>
   {/* Product listing */}
  {product && product.slice(to,from).map((item , index)=>{
   
    return  <ProductCard key={index} {...item} /> 
  })}
   </div>
    {/* pagination section */}
     <Pagination page={page} setPage={setPage} product={product && product?.length} setTo={setTo} setFrom={setFrom}/>       
    </section>
  )
} 

export default MainProduct
