 import { useSelector } from "react-redux"
 import { productDatas} from "../state/expandedSlice"
 import { Link } from "react-router-dom"
 import { FcHome } from 'react-icons/fc'
 import { LiaProductHunt } from 'react-icons/lia'
import useTitle from "../hook/useTitle"
import { ProductCard } from "./ProductCard"



const MainProduct = () => {
  
  // Fetch product data from Redux store
  const product = useSelector(productDatas)
  
   // Set the page title using the custom hook
    useTitle("Product")
      

 
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
        
   <div className='flex flex-wrap justify-center'>
   {/* Product listing */}
  {product && product.map((item , index  )=>{
   
    return  <ProductCard key={index} {...item} /> 
  })}
   </div>
           
    </section>
  )
} 

export default MainProduct
