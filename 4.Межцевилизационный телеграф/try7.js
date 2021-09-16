let spend = (amount, costsArray) => {

  
let getAllIndexes = (arr, val) =>{
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i+1);
    }
    return indexes;
}
  
let mySet = costsArray.map((el)=> ({[el]:getAllIndexes(costsArray,el) }))
.reduce((combo, item) => {
    let key = [Object.keys(item)]
    combo[key] = item[key];
    return combo;
}, {})
  
console.log('myset', mySet)

let sortedArr = [...new Set(costsArray)].sort((a,b)=> a-b )
console.log('sorted costs', sortedArr)

let gIdx = sortedArr.length
let res = "";
let idx = 1
let start = true
let forward = true

let getCostArray = (idx) => {
  
  let curNum = sortedArr[idx-1]
  return mySet[curNum].reverse()  
    
  
}

while (amount > 0)  {

  
let chunk = [...getCostArray(idx)]
console.log('chunk + idx + amount', chunk, idx, amount)
//}


  
for (let num of chunk) {

  curNum = sortedArr[idx-1]
  
  console.log('curNum', curNum, )
  if (amount < curNum) {forward = false;break; }
  
  amount -= curNum
  res += num
  
  
}
  
  if (!forward && idx < 2) {forward = true; break}
  if (forward && idx < gIdx) idx++; else {forward = false;idx--}
  
  console.log('idx',idx)
  
  
  
console.log('idx changed, amount', idx, amount, forward)  
}
 
  console.log('am,res', amount, res)
  
  
   return res
 
  
 }


let r = spend(5,[5,4,3,2,1,2,3,4,5]);

//console.log("rrrrrrrresult",r);