const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

// Use map to transform each element into its length (number of characters)
const nameLengths = lighthouses.map((name) => name.length);

console.log(nameLengths);