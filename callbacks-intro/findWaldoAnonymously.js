const findWaldo = function (names, found) {
  names.forEach((name, index) => {
    if (name === "Waldo") {
      found(index); // Pass the index as an argument when calling the callback
    }
  });
};


findWaldo(["Alice", "Bob", "Waldo", "Winston"], function (index) {
  console.log(`Found Waldo at index ${index}!`);
})