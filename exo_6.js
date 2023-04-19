// function countBuildingsWithSunsetView(buildings) {
//   let count = 1; // on commence par considérer le dernier bâtiment comme ayant une vue sur le coucher de soleil
//   let max_height = buildings[buildings.length - 1]; // on considère le dernier bâtiment comme le plus haut

//   for (let i = buildings.length - 2; i >= 0; i--) {
//     // on parcourt la liste en partant du deuxième bâtiment en partant de la droite
//     if (buildings[i] > max_height) {
//       // si le bâtiment courant est plus haut que le plus haut précédent
//       max_height = buildings[i]; // on met à jour la hauteur maximale
//       count++; // on ajoute ce bâtiment à ceux ayant une vue sur le coucher de soleil
//     }
//   }

//   return count;
// }

// // Exemple d'utilisation :
// const buildings1 = [3, 7, 8, 3, 6, 1];
// const buildings2 = [1, 4, 5, 8];
// console.log(countBuildingsWithSunsetView(buildings1)); // affiche 3
// console.log(countBuildingsWithSunsetView(buildings2)); // affiche 1
