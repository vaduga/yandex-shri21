'use strict';

let solution = (pass)=> {
if (pass.length === 0) return false
// let check = pass.split('').filter(digit => digit !== '7' && digit !== '1')

// if (check.length>0) return false

function occurrences(string, subString, allowOverlapping) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
      
        if (pos >= 0) {
      
            ++n;
            pos += step;
        } else break;
    }
    return n;
}

  let el = occurrences(pass, "1111", false)
  console.log("occ 1111", el)
  pass = pass.replaceAll('1111','')
  console.log(pass)
  if (pass === "") return true
  el = occurrences(pass, "711", false)
  console.log("occ 711", el)
  pass = pass.replaceAll('711','')
  console.log(pass)
  if (pass === "") return true
  el = occurrences(pass, "7", false)
  console.log("occ 7", el)
  pass = pass.replaceAll('7','')
  console.log(pass)
  if (pass === "") return true
  return false
  
  
  
  
}

solution('71111711117111111')