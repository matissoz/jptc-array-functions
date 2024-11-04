function capitalizeNames(arr: string[]): string[] {
    return arr.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
  }
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
  // ["John", "Jacob", "Jingleheimer", "Schmidt"]