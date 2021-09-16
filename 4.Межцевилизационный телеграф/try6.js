let spend = (amount, costsArray) => {
  
  
  let res = "";
  
  function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i+1);
    }
    return indexes;
}
  
  
let costIdxs = costsArray.map((el)=> ({[el]:getAllIndexes(costsArray,el) }))
costIdxs = costIdxs.reduce((combo, item) => {
    let key = [Object.keys(item)]
    combo[key] = item.[key];
    return combo;
}, {})

console.log('costs idxs',costIdxs)
  
  
if (amount <= 0) return res
let minNum = [...costsArray].sort((a,b)=> a-b )[0]

console.log('minnum', minNum)


 
let bestBuy = costIdxs[minNum][0]
console.log('best',bestBuy)
  
while (amount >= costsArray[bestBuy-1]) {
  
let bestBuy = costIdxs[minNum][0]
console.log('best',bestBuy)
  console.log('minus', costsArray[bestBuy]) 
   amount -= costsArray[bestBuy-1]
  console.log('am',amount) 
   res += bestBuy
   if (costIdxs[minNum].length > 1) costIdxs[minNum].shift()
  console.log('shift', costIdxs[minNum])

  

}
  
   return res.split('').reverse().join('')
 
  
 }


let r = spend(23,[2,11,2,12,5,9,10,6]);

console.log("rrrrrrrresult",r);