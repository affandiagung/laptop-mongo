function countPositivesSumNegatives(input) {
  let summinus = 0
  let sum=0
  for (let i=0;i<input.length;i++)
  { 
    if ( input[i]>= 0)
     sum = sum + input[i]
    else
      summinus = summinus - input[i]
  }
  return [sum , summinus]
}

console.log(countPositivesSumNegatives([1,2,3,4]))