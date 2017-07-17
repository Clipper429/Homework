let i;
for (let i = 1; i < 101; i++) {
  if (( i % 3) === 0){
    console.log('Fizz')
  }
  if ((i % 5) === 0) {
    console.log('Buzz')
  }
  if (((i % 5) === 0) && ((i % 3) === 0)){
    console.log('FizzBuzz')
  }
}

// Problem 2

function myFunc (someArray) {
  let total = 0;
  for (let i = 0; i < someArray.length; i++) {
      total += someArray[i];
  }
  let avg = total / someArray.length;
  let mAvg = Math.floor(avg);
  return (mAvg)
}
let anArray = [3.8, 6.5, 9.7];
  console.log((myFunc(anArray)));
