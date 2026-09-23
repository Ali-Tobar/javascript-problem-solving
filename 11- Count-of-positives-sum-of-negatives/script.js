function countPositivesSumNegatives(input) {
  let positivesArray = [];
  let sumNegatives = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positivesArray.push(input[i]);
    } else {
      sumNegatives += input[i];
    }
  }
  return [positivesArray.length, sumNegatives];
}


// Another solution 
function countPositivesSumNegatives(input) {
 
  if (!input || input.length === 0) {
    return [];
  }

  let positiveCount = 0;
  let negativeSum = 0;


  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positiveCount++;
    } else if (input[i] < 0) {
      negativeSum += input[i];
    }
  
  }

  return [positiveCount, negativeSum];
}
