// function sameFrequency(numberOne, numberTwo) {
//   let arrayOne = ("" + numberOne).split("");
//   let arrayTwo = ("" + numberTwo).split("");
//   let i = 0;
//   if (arrayOne.length !== arrayTwo.length) {
//     return false;
//   }
//   let numberFrequencies = {};

//   while (i < arrayOne.length) {
//     let key1 = arrayOne[i]
//     if (numberFrequencies[key1] === undefined) {
//       numberFrequencies[key1] = 1;
//     } else {
//       numberFrequencies[key1] += 1;
//     }
//     i ++;
//   }
//   let j = 0
//   while (j < arrayTwo.length) {
//     let key2 = arrayTwo[j]
//     if (numberFrequencies[key2] !== undefined && numberFrequencies[key2] > 0) {
//       numberFrequencies[key2] -= 1;
//     } else {
//       return false;
//     }
//     j ++;
//   }
//   return true;
// }
// console.log(sameFrequency(1231, 3112))

function areThereDuplicates() {
  let frequencies = {};
  let i;
  
  for (i = 0; i < arguments.length; i ++) {
    let key = arguments[i];
    if (frequencies[key] === undefined) {
      frequencies[key] = 1;
    } else  {
      return true;
    }
  }
  return false;
}
console.log(areThereDuplicates('a', 'b', 'c'))

