function stringItUp(arr: number[]): string[] {
    return arr.map(num => num.toString());
  }
  
  console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]