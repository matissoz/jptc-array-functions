function arrayToCommaDelimitedString(arr: string[]): string {
    // Join the array elements into a string separated by commas
    return arr.join(',');
}

// Example usage
const inputArray: string[] = ["h", "o", "l", "a"];
const outputString: string = arrayToCommaDelimitedString(inputArray);

console.log(outputString); 