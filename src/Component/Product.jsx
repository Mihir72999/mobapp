

import { Link } from 'react-router-dom';
import Contents from './Content';
import MainContents from './MainContent';





 


const url = [
  'https://cdn.pixabay.com/photo/2019/12/14/08/36/shopping-4694470_1280.jpg',
  'https://img.freepik.com/free-vector/online-shopping-with-woman-character_1133-387.jpg?w=1380&t=st=1691038507~exp=1691039107~hmac=ffc4b7228f5df8f90926e0ab3432d6eb7143570b169efe24291f740134100881'
]

const Product = () => {

  
 
  return (
    <>
     
      <div  className=' flex flex-col lg:mt-0  mt-3 w-[100%]'>
        
        <div 
        
        data-aos="slide-down"
        
        data-aos-duration="1000"
        ><img  className='w-[2000px]  lg:h-[600px] h-[200px]' src={url[0]} alt=''/></div>
       <div
        className='block lg:absolute  lg:left-2/4 lg:top-2/4  
         top-3/3

         px-2
         text-x
         font-bold 
         lg:text-4xl
         my-3
         lg:my-0
         '
         
        >
        <p data-aos="fade-up" className='lg:text-zinc-50 text-green-800'>FAST AND RELIABLE</p>
        <p data-aos="fade-up" className='text-indigo-900 '>SHOP WITH CONFIDENT</p>
        <p data-aos="fade-up"
          className=' lg:text-xs lg:my-4 my-0  text-xs text-gray-700 lg:text-zinc-50  max-w-[550px] font-semibold'
           data-aos-delay='1500'
        >With our user-friendly e-commerce platform, shopping has never been easier.
           Say goodbye to long queues and crowded stores as you browse through 
           our vast collection of products from the comfort of your home.
            Our intuitive interface allows you to find what you need with just a few clicks,
           making the entire process smooth and hassle-free.</p>
        <a href={`#main`}><button
        data-aos="slide-right"
        data-aos-duration='2000'
         
        className='button bg-transparent border-2 border-separate lg:text-xl 
        text-sm lg:py-3 lg:px-8 px-3 py-2  lg:my-8 my-2
        font-normal  border-indigo-500 text-indigo-950' >View More</button></a>
        </div>
      </div>
    
      <div className='flex justify-around lg:flex-row flex-col' >
        <Contents
        title='WELCOME TO ONLINE STORE'
        description='We are Providing Trendy Mobile Backcovers. Discover Backcover Elegance'/>
        <MainContents />
        </div>
      

    </>
  )
}

export default Product
