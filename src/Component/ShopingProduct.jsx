import { useDispatch, useSelector } from "react-redux"
import { Link,  useNavigate, useParams } from "react-router-dom"
import { productById, useGetProductQuery } from "../state/expandedSlice"

import { selectBrandmodel } from "../state/brandmodelSlice"
import {  useState } from "react"
import { FcHome } from 'react-icons/fc'
import { LiaProductHunt } from 'react-icons/lia'
import { addToCart , showCart} from "../state/addSlice"
import useTitle from "../hook/useTitle"


const ShopingProduct = () => {
  const { id  } = useParams()
  const { isLoading, isError, isSuccess } = useGetProductQuery()
  
  const [brand ,setBrand] = useState('')
const [select , setSelect] = useState('')

  
  const dispatch = useDispatch()
  const selectedProduct = useSelector(state => productById(state, id))
  const brandmodel = useSelector(selectBrandmodel)
  const brandmodels = brandmodel.filter(res=>res.brand === brand)
  const navigate = useNavigate()
  useTitle(selectedProduct && selectedProduct.name)
  const product = {
    description:
    selectedProduct && selectedProduct.name,
    highlights: [
      'Thin & Soft Silicone Rubber case',
      'Full Camera Protective Case',
      'Photo-realistic print quality',
      'Half edge Smooth Printing on Side',
      'Hassle-free replacements',
      'Delivery in 5-7 working days'
    ],
    details:
    'Order above ₹ 300  and get Free Delivery Just add items worth ₹ 300 or more than across the store to the cart you do not need to coupon code',
    
  }
  
    
  const handleClick = (e) =>{
  
    dispatch(showCart())
    dispatch(addToCart(e))
    navigate('/cart')
    
}

  return (
    <div>
      {isLoading && <div>...loading</div>}
      {isError && <div>went something wrong</div>}
      {isSuccess && <div>
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <li>
              <div className="flex items-center">
                <Link to='/' className="mr-2 text-sm font-medium text-gray-900"><FcHome /></Link>
                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <Link to='/product' className="mr-2 text-sm font-medium text-gray-900"><LiaProductHunt /></Link>
                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>

            <li className="text-sm">
              <a aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">{selectedProduct && selectedProduct.name}</a>
            </li>
          </ol>
        </nav>
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img width={200} src={selectedProduct && selectedProduct.image} alt="Two each of gray, white, and black shirts laying flat." className="py-10  rotate-45 h-full  object-cover object-center" />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img width={150} src={selectedProduct && selectedProduct.image} alt="Model wearing plain black basic tee." className=" h-full mx-auto object-cover object-center" />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img width={150} src={selectedProduct && selectedProduct.image} alt=" Model wearing plain gray basic tee." className="rotate-90 h-full mx-auto object-cover object-center" />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img src={selectedProduct && selectedProduct.image} alt="Model wearing plain white basic tee." className="h-full mx-auto  object-cover object-center" />
          </div>
        </div>

        <div className="flex flex-col m-auto w-[60%] my-10 ">
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className=" text-gray-900 text-2xl">{product.description?.toUpperCase()}</p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="text-gray-400">
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Details</h2>

            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">{product.details}</p>
            </div>
          </div>
        </div>
       <div className="flex flex-col m-auto items-start w-[60%] my-11">
        <select className=" border-2 w-[200px] border-gray-500 lg:w-[30%] py-2 px-5 my-10 "    onChange={(e)=>setBrand(e.target.value)}>
         { brand === '' && <option>Select Brand</option>}
           {brandmodel.map(e=> <option  key={e.id} value={e.brand}>{e.brand.toUpperCase()}</option>)}
          </select>
          <select onChange={(e)=>setSelect(e.target.value)} className="border-2 w-[200px] border-gray-500 lg:w-[30%] py-2 px-5">
           {brand === '' && <option >Select BrandModel</option>}
          { brandmodels.map((e)=>e.brandmodel.map((e, i)=> <option value={e}  key={i}>{e}</option>))}
          
          </select>
     {isSuccess  && <button
       onClick={()=>handleClick([{
         id: selectedProduct.id + select ,
         image:selectedProduct.image,
         name:selectedProduct.name,
         brandmodel:select,
         brand:selectedProduct.brand,
         availableQty:selectedProduct.availableQty ,
         qty:selectedProduct.qtyItem,
         price:selectedProduct.price,
         
         
        } ])}
        className={`bg-sky-700
        text-white 
        rounded-3xl
        px-5 py-2 my-10 disabled:opacity-50`}
        disabled={select === ''}
        
          >Add To Cart
          </button>}
         </div>
      </div>
      }
    </div>
  )
}

export default ShopingProduct