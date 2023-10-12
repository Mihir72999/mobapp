const Formate =(data)=>{
    
  return  new Intl.NumberFormat('en-IN' , {style:'currency' , currency:'INR'}).format(data)
} 


export default Formate