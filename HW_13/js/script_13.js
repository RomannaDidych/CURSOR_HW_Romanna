//task 1
function* createIdGenerator() {
  for (let i = 1; i < Infinity; i++) {
    yield i;
  }
}
const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

//task 2
function* newFontGenerator(fontSize) {
  let value = fontSize;
  while (true) {
    const direction = yield value;
    if (direction === "up") {
      value += 2;
    }
    if (direction === "down") {
      value -= 2;
    }
  }
}

const fontGenerator = newFontGenerator(14);

console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);


