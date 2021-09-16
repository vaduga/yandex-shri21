let spend = (amount, costsArray) => {
  
  let final = "";
  let minIdx = 0
  

  let asc = [...costsArray].sort((a, b) => a - b);

    let bestBuy = asc[0];

    while (amount >= bestBuy) {
    console.log("amount", amount);
    console.log("costsArray sorted", asc);

    

        
      minIdx = costsArray.indexOf(bestBuy, minIdx);
      console.log('index of bestBuy',bestBuy, minIdx+1)
               
      final += minIdx + 1;
      console.log('spend', final)
      
      if (asc[0] === asc[1]) minIdx++
      console.log("asc0 and asc1 min idx", asc[0], asc[1], minIdx)

      amount -= bestBuy;
    

    if (asc[0] === asc[1]) {
      asc.shift();
      
    }

    console.log("cut array", asc);

}  return final
  }

let r = spend(50,[5,4,3,2,1,2,3,4,5]);

console.log("rrrrrrrresult",r, r.length);
