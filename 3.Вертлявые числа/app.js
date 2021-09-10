'use strict';

let solution = (pass)=> {
if (pass.length == 0 ) return false
  
let idx = 0 


while (idx < pass.length) {
  
console.log("idx:"+idx)  
  if (pass[idx] != "7" && pass[idx] != '1') return false
  
  let count = 1  
  
  while (pass[idx+count] == pass[idx]) {
     count++
  
   }
  console.log(count)
  if (pass[idx]=="1" && count % 2 !=0) return false
   idx+=count
  
}

  
return true
  
}

solution('117777117')
    
    
   
    
    
  

 
 

 
 
  
   
   
 

    
    

