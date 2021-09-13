

// 5,[5,4,3,2,1,2,3,4,5]   55555

/// 2,[9,11,1,12,5,8,9,10,6]  33

/// 0,[1,1,1,1,1]   0


function spend(amount, costsArray, res) {
  
  console.log("amount", amount)
  
  
  res = res || ""
  
  console.log("costsArray",costsArray)
  let asc = [...costsArray].sort((a,b) => b - a);
  console.log("costsArray sorted", asc)
  
  let digits = asc[0].toString().length
   console.log("d",digits)
  
  
  console.log("curr digits", digits)
  let curSlice = [...asc].filter( el=> el.toString().length === digits)
  console.log('curSlice and digits', curSlice,digits)
  let bestBuy = [...curSlice].sort((a,b)=> a-b)[0]
  console.log('best buy', bestBuy)
  
  


  if (amount >=bestBuy) {  

    res = res + bestBuy
    amount -= bestBuy   
  }
  
    let cutArray
  if (amount < bestBuy) {
  cutArray = [...costsArray].filter( f => f.toString().length < digits)
  } 
  else cutArray = [...costsArray]
  
     
  console.log("cut array" , cutArray)
  
  
      console.log("f amount", amount)
  if (amount < bestBuy) {
                 res = spend(amount, cutArray, res)  }
  else  
    console.log("res",res)   
      return res
    
  
  
  
  
  //return res
  
}


let r = spend(2,[9,11,1,12,5,888,9,10,6])


console.log("rersdfsdfsdfdrrrr", r)



    
    
  

 
 

 
 
  
   
   
 

    
    

