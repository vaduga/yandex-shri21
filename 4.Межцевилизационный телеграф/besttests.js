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

if (amount <= 0) return res
let minNum = [...costsArray].sort((a,b)=> a-b )[0]

let bestBuy = costIdxs[minNum][0]

  
while (amount >= costsArray[bestBuy-1]) {
  
let bestBuy = costIdxs[minNum][0]

   amount -= costsArray[bestBuy-1]


   res += bestBuy
   if (costIdxs[minNum].length > 1) costIdxs[minNum].shift()


  

}
  
   return res.split('').reverse().join('')
 
  
 }

let r = spend(5,[5,4,3,2,1,2,3,4,5]);

console.log("rrrrrrrresult",r);