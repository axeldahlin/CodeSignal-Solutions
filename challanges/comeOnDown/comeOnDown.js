function comeOnDown(maxPrice, bids) {


  let myBid = 0;
  let biggestDiff = 0;

  let sorted = bids.slice();
  sorted.push(maxPrice, 0);
  sorted.sort((a,b) => a-b);

  console.log(sorted);

  
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] >= maxPrice) {
      continue;
    }

    let diff = sorted[i+1] - (sorted[i]); 
    console.log(diff);
    if (diff > biggestDiff) {
      biggestDiff = diff;
      myBid = sorted[i] + 1;

    }


  }
  
  return Math.round(myBid);
    
}




console.log(comeOnDown(3250, [2599, 972, 700, 2013]));