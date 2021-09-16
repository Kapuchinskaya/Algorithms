/*/////////////////////
///////BIG O///////////
*/ /////////////////////

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
*/ /////////////////////

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
*/ /////////////////////
// let n1 = 1;
// let n2 = n1;
// n1 = 10;
// console.log(n1, n2)//10, 1
// //c объектами
// let obj1 = { val: 11 };
// let obj2 = obj1;
// obj1.val = 22
// console.log(obj1, obj2) //{22}, {22}

/*/////////////////////
/////   LINKED LISTs  ////////
*/ /////////////////////
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  //push method
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //pop method
  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    temp.next = null;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i <= index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(value);
    if (index === 0) return this.unshift(value);

    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const before = this.get(index - 1);
    const temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
