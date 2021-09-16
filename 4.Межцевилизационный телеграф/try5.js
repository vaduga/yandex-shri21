let spend = (amount, costsArray) => {
  
  
  let final = "";
  
  if (amount <= 0) return final
  let minIdx = 0
  

  let asc = [...costsArray].sort((a, b) => a - b);
console.log('asc',asc)
  let min = asc[0];
  let transform = costsArray.map((el, idx) => [el, idx]).filter((el)=> el[0] === min)
 console.log('tr',transform)
 
 while (amount > 0 ) {
  
 
 let bestBuy = transform[0]
 console.log(bestBuy)
  
 while (amount >= bestBuy[0]) {
  let bestBuy = transform[0]
  amount -= bestBuy[0]
  final += bestBuy[1]+1
   if (transform.length > 1) transform.shift()
   console.log(transform)

  }
 console.log(amount) 
  return final.split('').reverse().join('')
}
  
}


let r = spend(2,[9,11,1,12,5,8,9,10,6]);

console.log("rrrrrrrresult",r);