// function hasSumPair(arr, k) {
//   const complements = new Set();

//   for (let i = 0; i < arr.length; i++) {
//     if (complements.has(arr[i])) {
//       return true;
//     }
//     complements.add(k - arr[i]);
//   }

//   return false;
// }

// console.log(hasSumPair([10, 15, 3, 7], 17)); // Output: true
// console.log(hasSumPair([1, 8, 10, 21], 19)); // Output: false
