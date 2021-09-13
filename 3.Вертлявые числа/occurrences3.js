'use strict';

let occurrences = (pass) => {

const nums = ['7','1']
if (pass.length === 0) return false

let goodNum = (num) => nums.includes(num)
let patternArr = ["7", "711", "1111"]


let getMatches = (chunk) => {
  
  
  return patternArr.filter(p=> !p.indexOf(chunk)) 
}

    let pos = 0
    let chunk = ""    
    let prev = ''
    let valid = ''

    while (pos < pass.length) {

if (!goodNum(pass[pos])) return "not 7,11"
      
chunk += pass[pos]
      console.log("chunk   " + chunk + " prev   " + prev + "  item " + pos )
      if (getMatches(chunk).length === 0) {
    
    chunk = pass[pos] 
      if (valid.includes(prev)) 
    {
      prev = valid
        
    } 
           
      else return "no matches even in prev"
    }
      
       prev = chunk
       if (patternArr.includes(prev)) valid = prev
       pos++
      console.log('valid',valid)
    }
  return "all nums finished and matched"
}

occurrences('11117117117111117117111111')