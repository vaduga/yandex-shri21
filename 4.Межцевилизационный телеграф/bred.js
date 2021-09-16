let spend = (amount, costsArray) => {
  
let res = "";
  
let getAllIndexes = (arr, val) =>{
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i+1);
    }
    return indexes;
}
  
let costIdxs = costsArray.map((el)=> ({[el]:getAllIndexes(costsArray,el) }))
costIdxs = costIdxs.reduce((combo, item) => {
    let key = [Object.keys(item)]
    combo[key] = item[key];
    return combo;
}, {})

  console.log(costIdxs)
  
if (amount <= 0) return res
  
  let sortedCosts = [...new Set([...costsArray].sort((a,b)=> a-b ))]

  
let minNum = sortedCosts[0]  



let costMap = costsArray.map((el,idx)=>({[idx+1]:el}))
let bestBuy = costIdxs[minNum][0]


if (amount < sortedCosts[0]) return ''
if (amount < 10 ) {
  
// let check = sortedCosts.filter((el)=> el >= 0)[0]
// console.log('filteres', check)
//   if (check===1) return costIdxs[amount].reverse()[0]
  
 
  myCost = sortedCosts.filter((el)=> el <= amount).sort((a,b)=>a-b)
//console.log('maxffarrr', myCost )           
  bestBuy = myCost.reverse()[0]
let maxArr = [[bestBuy]]
//console.log('maxffarrr', bestBuy )         
let max = 0
 
for (let i = 9; i > 0; i--) {
  
    for (let c = 9; c > 0 ; c--){
      let sum = costsArray[i-1]+costsArray[c-1]
      
     sum = parseInt(sum)

     if (sum <= amount) maxArr.push([i,c])
                                    }
}

    
    
                

  
  maxArr = maxArr.map((el)=> el.join('')).sort((a,b)=> b-a)
  
  //console.log('maxaar', maxArr )
  maxArr = maxArr.sort((a,b)=> b-a)
  if (maxArr.length === 1) res = costIdxs[maxArr[0]].reverse()[0]+''
  else res = maxArr[0]
   return  res
  
}

  
if (sortedCosts[1]) {

  if (amount%minNum ===1) {

  let nextBiggest = [...costIdxs[sortedCosts.reverse()[0]]]
  amount-= sortedCosts[1]
  res += nextBiggest }
}  
  
let arr =  costIdxs[minNum].reverse() 
while (amount >= costsArray[bestBuy-1]) {
  
let bestBuy = arr[0]

   amount -= costsArray[bestBuy-1]

   res += bestBuy
   if (costIdxs[minNum].length > 1) costIdxs[minNum].shift()

if (amount < bestBuy && minNum > 1) {
 if (costIdxs[minNum].length>1) costIdxs[minNum].unshift()
}//; minNum = sortedCosts[whichCan]--;console.log('min--', minNum)}
  

}
 
   return res// .split('').reverse().join('')
 
  
 }

let r = spend(5,[5,4,3,2,1,2,3,4,5]);

console.log("rrrrrrrresult",r);