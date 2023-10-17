import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link } from "react-router-dom"
import Formate from "./Formate"

export const  ProductCard  = ({name,id,price,image}) =>{
    return <div  className ='bg-zinc-100  mx-1  my-1 w-[16rem]'>
       <div className="flex flex-col  justify-center items-center text-center ">
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
    }