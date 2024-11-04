function sumOfPositives(arr: number[]): number {
    return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
  }
  
  console.log(sumOfPositives([1, -4, 7, 12])); // 20
  