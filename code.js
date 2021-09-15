/*/////////////////////
///////BIG O///////////
*//////////////////////

// /*O(n)*/
// function logItems(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
// }
// // logItems(10);

// /*O(n*2)*/
// /*drop non-dominants!*/
// function logItems(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       console.log(i);
//     }
//   }
// }
// // logItems(10);

// /*O(1) - most efficient*/
// function logItems(n) {
//   return n + n
// }
// // logItems(10);

// /*O(log n) - делить на 2 части - divide and conquer*/
// function logItems(n) {
//   return n + n
// }
// // logItems(10);

// /*QUIZ*/
// /*верный тип - O(a+b), не О(n) */
// function logItems(a, b) {
//   for (let i = 0; i < a; i++) {
//     console.log(i);
//   }
//   for (let i = 0; i < b; i++) {
//     console.log(i);
//   }
// }

// /*верный тип - O(a*b), не О(n*2) */
// function logItems(a, b) {
//   for (let i = 0; i < a; i++) {
//     for (let j = 0; j < b; j++) {
//       console.log(i);
//     }
//   }
// }


/*/////////////////////
/////   CLASSES  ////////
*//////////////////////

// class Cookie {
//   constructor(color) {
//     this.color = color
//   }
//   getColor() {
//     return this.color //getter
//   }
//   setColor(color) {
//     this.color = color //setter
//   }
// }

// let cookieOne = new Cookie('green')
// let cookieTwo = new Cookie('blue')

// cookieOne.setColor('red');
// console.log(cookieOne.getColor())


/*/////////////////////
/////   POINTERS  ////////
*//////////////////////
let n1 = 1;
let n2 = n1;
n1 = 10;
console.log(n1, n2)//10, 1
//c объектами
let obj1 = { val: 11 };
let obj2 = obj1;
obj1.val = 22
console.log(obj1, obj2) //{22}, {22}
