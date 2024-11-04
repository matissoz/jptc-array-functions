function squareSum(arr: number[]): number {
    return arr.map(num => num ** 2).reduce((sum, square) => sum + square, 0);
  }
  
  console.log(squareSum([1, 2, 2])); // Output: 9
  