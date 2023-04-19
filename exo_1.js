function hasSum(list, k) {
  const complements = new Set(); // pour stocker les compléments vus

  for (const num of list) {
    if (complements.has(num)) {
      // si on a déjà vu le complément, on a trouvé une paire
      return true;
    }

    const complement = k - num;
    complements.add(complement);
  }

  // si on a parcouru toute la liste et qu'on n'a rien trouvé, il n'y a pas de paire
  return false;
}

console.log(hasSum([10, 15, 3, 7], 17)); // true
console.log(hasSum([1, 8, 10, 21], 19)); // false
