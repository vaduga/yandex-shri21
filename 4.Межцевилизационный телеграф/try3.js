let spend = (amount, costsArray) => {
  
  let final = "";
  let minIdx = 0
  

  let asc = [...costsArray].sort((a, b) => a - b);

    minIdx = minIdx || 0;
    

    while (amount >= 0) {
    console.log("amount", amount);
    console.log("costsArray sorted", asc);

    let bestBuy = asc[0];

    if (amount >= bestBuy) {
      
      minIdx = costsArray.indexOf(bestBuy, minIdx);
      console.log('index of bestBuy',bestBuy, minIdx+1)
               
      final += minIdx + 1;
      
      if (asc[0] === asc[1]) minIdx++
      console.log("asc0 and asc1 min idx", asc[0], asc[1], minIdx)

      amount -= bestBuy;
    }

    if (asc[0] === asc[1]) {
      asc.shift();
      
    }

    console.log("cut array", asc);

}
  }

let r = spend(10, [2, 11, 1, 12, 1, 1888, 2, 1,10,1, 6]);

console.log("rrrrrrrresult",r);
