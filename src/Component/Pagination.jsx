import React,{memo} from 'react'

import {CiSquareChevLeft,CiSquareChevRight} from 'react-icons/ci'

const Paginations = ({ setTo , setFrom , page , setPage , product}) => {
   
   
    let totalItemPerPage = 9;
   let items = product / totalItemPerPage
    let currentPage = 1
    let n = [] ;
    let arr = [];
     for (let i = 1; i <= items; i++){
        n += [i]
        arr = [...n].map(Number)
    }
    
   console.log(arr)
    const handleChange = (element ) =>{
        currentPage = Number(element.target.value)
        setPage(currentPage)
        setFrom((currentPage - 1 ) * totalItemPerPage + totalItemPerPage )
        setTo((currentPage - 1) * totalItemPerPage  )
       
    }
   
    const handlePrev = () =>{
      if(page > currentPage){
        setPage(page - 1)
        setTo((page - 1) * totalItemPerPage - totalItemPerPage )
        setFrom((page - 1) * totalItemPerPage  
        
        )
      }
    }
    const handleNext = () =>{
    if(page < items){
      setPage(page + 1)
      setTo((page - 1) * totalItemPerPage + totalItemPerPage )
      setFrom((page ) * totalItemPerPage + totalItemPerPage )
    }
  }
  
 return (
    <div className='flex justify-end py-10 pr-5'>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button
             onClick={handlePrev}
             disabled={page === currentPage}
              className="relative  cursor-pointer inline-flex items-center rounded-l-md px-2 py-2 text-gray-700 disabled:text-gray-300 ring-1 ring-inset ring-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <CiSquareChevLeft   className="h-5 w-5" aria-hidden="true" />
            </button>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            {arr.map((e,i)=>(<input
              key={i}
              value={e}
              type="button"
              onClick={(e)=>handleChange(e , i)}
              aria-current="page"
              className={`relative  cursor-pointer z-10 inline-flex items-center ${page === (i + 1) ? 'bg-indigo-600 text-white ' : ' text-gray-800 '}  px-4 py-2 text-sm font-semibold focus:z-20  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            />))}
            
            <button
             onClick={handleNext}
             disabled={page === items} 
             className="relative cursor-pointer inline-flex items-center rounded-r-md px-2 py-2 text-gray-700 ring-1 ring-inset disabled:text-gray-300 ring-gray-500 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <CiSquareChevRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
    </div>
  )
}
const Pagination = memo(Paginations)
export default Pagination
