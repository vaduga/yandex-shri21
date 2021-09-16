

// 5,[5,4,3,2,1,2,3,4,5]   55555

/// 2,[9,11,1,12,5,8,9,10,6]  33

/// 0,[1,1,1,1,1]   0

let wrap = (amount, costsArray) =>{
  
  let final = ''
  let init = [...costsArray]
  
function spend(amount, costsArray, res) {
    
  res = res || ""
  console.log("amount", amount)
  if (amount < 0) return res
  
  let asc = [...costsArray].sort((a,b) => b - a);
  console.log("costsArray sorted", asc)
  
  if (typeof asc[0] === 'undefined') return res
  let digits = asc[0].toString().length
  console.log("d",digits)
  
  
  console.log("curr digits", digits)
  let curSlice = [...asc].filter( el=> el.toString().length === digits)
  console.log('curSlice and digits', curSlice,digits)
  let bestBuy = [...curSlice].sort((a,b)=> a-b)[0]
  console.log('best buy', bestBuy)
  
  


  if (amount >=bestBuy) {  

    final += init.indexOf(bestBuy)+1
    console.log("final" , final)
    amount -= bestBuy   
  }
  
    let cutArray
  if (amount < bestBuy) {
  cutArray = [...costsArray].filter( f => f.toString().length < digits)
  } 
  else cutArray = [...costsArray]
  
     
  console.log("cut array" , cutArray)
  
          
  res = spend(amount, cutArray, res)  
  
     
    return res
    
  
    
}
spend(amount, costsArray)  
return final  
  
}

let r = wrap(1000,[9,11,1,12,5,1888,9,10,6])


console.log("rersdfsdfsdfdrrrr", r)





    
    
  

 
 

 
 
  
   
   
 

    
    

