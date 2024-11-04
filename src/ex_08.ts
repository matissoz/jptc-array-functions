function countPositivesSumNegatives(arr: number[] | null): number[] {
    if (!arr || arr.length === 0) return [];
  
    const countPositives = arr.filter(num => num > 0).length;
    const sumNegatives = arr.filter(num => num < 0).reduce((sum, num) => sum + num, 0);
  
    return [countPositives, sumNegatives];
  }
  
  console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
  // Output: [10, -65]
  