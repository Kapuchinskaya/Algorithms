/*/////////////////////
/////   CLASSES  ////////
*/ /////////////////////

class Cookie {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color; //getter
  }
  setColor(color) {
    this.color = color; //setter
  }
}

let cookieOne = new Cookie("green");
let cookieTwo = new Cookie("blue");

cookieOne.setColor("red");
console.log(cookieOne.getColor());

/*/////////////////////
/////   POINTERS  ////////
*/ /////////////////////
let n1 = 1;
let n2 = n1;
n1 = 10;
console.log(n1, n2); //10, 1
//c объектами
let obj1 = { val: 11 };
let obj2 = obj1;
obj1.val = 22;
console.log(obj1, obj2); //{22}, {22}
