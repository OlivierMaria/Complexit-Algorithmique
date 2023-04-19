function countBuildingsWithWestView(buildingHeights) {
  let count = 0;
  let maxHeight = 0;

  for (let i = buildingHeights.length - 1; i >= 0; i--) {
    if (buildingHeights[i] > maxHeight) {
      maxHeight = buildingHeights[i];
      count++;
    }
  }

  return count;
}

console.log(countBuildingsWithWestView([3, 7, 8, 3, 6, 1])); // Output: 3
console.log(countBuildingsWithWestView([1, 4, 5, 8])); // Output: 1
