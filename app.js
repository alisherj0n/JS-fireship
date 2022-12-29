// // Prototype chain

// // const animal = {
// //   dna: 123,
// //   legs: {
// //     front: 2,
// //     back: 2,
// //   },

// //   sleep() {
// //     console.log('zzz');
// //   },
// // };

// // const dog = {
// //   bark() {
// //     console.log('woof');
// //   },
// // };

// // Object.setPrototypeOf(dog, animal);

// // console.log(dog.dna);

// // const p1 = Object.getPrototypeOf(animal);
// // console.log(p1);

// // const p2 = Object.getPrototypeOf(p1);

// // console.log(p2);

// // Destructuring

// // const dog = {
// //   name: 'Fido',
// //   age: 4,
// //   bark() {
// //     console.log('woof');
// //   },
// // };

// // const name = dog.name;
// // const age = dog.age;

// // const { name: fullName, age } = dog;

// // console.log(fullName);

// // const arr = ['foo', 'bar', 'baz'];

// // const c = arr[2];

// // console.log(c);

// // Closures

// function encapsulatedState(x) {
//   let state = 10;
//   return function () {
//     state += x;
//     return state;
//   };
// }

// encapsulatedState(10);

const log = () => console.log('hello');
setTimeout(log, 10000);

console.log(log);
