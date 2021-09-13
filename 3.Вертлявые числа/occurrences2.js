'use strict';

let occurrences = (pass) => {
if (pass.length === 0) return false

let isGood = (num) => !["7","1"].includes(pass[num])



let checkChunk = (chunk) => {
  let patternArr = ["7", "711", "1111"]
  let matches = patternArr.filter(p=> !p.indexOf(chunk)) 
  console.log("chunk check arr", matches)
  return matches.length > 0
}

checkChunk("11")


  
    let pos = 0
    let chunk = ""    
    let prev = ''
    let temp
    while (pos < pass.length) {
    
console.log(isGood(pass[pos]))    
      
    
    }

}

occurrences('711117111171111771111')