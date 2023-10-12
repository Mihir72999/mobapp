
const actualTax = (item) =>{
    const pluck = key => object => object[key]
    const map = fn => array => array.map(fn)
    const multiply = x => y => x * y 
    const tax = multiply(0.05)
    const getData = map(pluck('price'))
    const prices = getData(item)
  
    const pri = map(tax)
    const pric = pri(prices)    
    
  return  pric.reduce((item ,price)=>item + price , 0)

  
}

export default actualTax