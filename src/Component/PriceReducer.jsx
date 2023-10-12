

const PriceReducer = (item) => {
   
    const data = item.reduce((total,item)=>{
        return total + item.price  
      },0)
  return data
}


export default PriceReducer