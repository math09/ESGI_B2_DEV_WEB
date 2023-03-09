let tableau = [10, 5, 23, 17, 8, 15, 29, 11, 20]
tableau.sort(function(a, b) {
    return a - b;
  });
  
console.log(tableau[0], tableau[tableau.length - 1])