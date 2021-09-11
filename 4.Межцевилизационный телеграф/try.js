

// 5,[5,4,3,2,1,2,3,4,5]   55555

/// 2,[9,11,1,12,5,8,9,10,6]  33

/// 0,[1,1,1,1,1]   0


function spend(amount, costsArray) {
  
  
  let min = [...costsArray].sort()[0]
  console.log(min)
  
  let res = ""
  
  while (amount > 0) {
    
   res+=costsArray.indexOf(min)+1
   amount = amount - min
    
    console.log("amount:"+ amount)
  }
      
  return res
  
}


//return string


spend(0,[9,11,1,12,5,8,9,10,6])




    
    
  

 
 

 
 
  
   
   
 

    
    

