function findSum(list, k) {
  let complements = new Set();

  for (let i = 0; i < list.length; i++) {
    let complement = k - list[i];
    if (complements.has(complement)) {
      return true;
    }
    complements.add(list[i]);
  }

  return false;
}

// Exemple d'utilisation :
let list1 = [10, 15, 3, 7];
let k1 = 17;
console.log(findSum(list1, k1)); // true

let list2 = [1, 8, 10, 21];
let k2 = 19;
console.log(findSum(list2, k2)); // false
