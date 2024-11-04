function processNumbers(arr: number[]): number[] {
    return arr.map(num => {
      const sqrt = Math.sqrt(num);
      return Number.isInteger(sqrt) ? sqrt : num ** 2;
    });
  }
  
  console.log(processNumbers([4, 3, 9, 7, 2, 1])); // Output: [2, 9, 3, 49, 4, 1]
  