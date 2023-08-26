function swapper(key1, object1, key2, object2) {
  let temp = object2[key2];
  object2[key2] = object1[key1];

  object1[key1] = temp;
  console.log("object1: ", object1);
  console.log("object2: ", object2);
}

swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
console.log (`======================`)
swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
console.log (`======================`)
swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });

// team: Matheus Chaves, Diana Lopez, Marzieh Kamali