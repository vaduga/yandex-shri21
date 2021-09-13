let occurrences = (pass) => {

if (pass === "") return false

let checkNum = (num) => ["7","1"].includes(num)


for (let pos = 0; pos < pass.length; pos++) {
  
  if (checkNum(pass[pos]) === false) return false
  
  let seq = []
  
  
  
  let count = 0

  if (pass[pos+count] === "1") {
  
  while (pass[pos+count] === "1") {
    
    seq.push(pass[pos+count]) 
    
  
    
    count++ 
    
    if (pos+count < pass.length && checkNum(pass[pos+count]) === false) return false
    
  }
    if (seq.length % 2 != 0)  return false
    pos+=count
  }
    if (pos<3 && seq.length == 2) return false
    

  
  
}
  
  
return true
}

occurrences('1111')