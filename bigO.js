/*/////////////////////
///////BIG O///////////
*/ /////////////////////

/*O(n)*/
function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
// logItems(10);

/*O(n*2)*/
/*drop non-dominants!*/
function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i);
    }
  }
}
// logItems(10);

/*O(1) - most efficient*/
function logItems(n) {
  return n + n;
}
// logItems(10);

/*O(log n) - делить на 2 части - divide and conquer*/
function logItems(n) {
  return n + n;
}
// logItems(10);

/*QUIZ*/
/*верный тип - O(a+b), не О(n) */
function logItems(a, b) {
  for (let i = 0; i < a; i++) {
    console.log(i);
  }
  for (let i = 0; i < b; i++) {
    console.log(i);
  }
}

/*верный тип - O(a*b), не О(n*2) */
function logItems(a, b) {
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      console.log(i);
    }
  }
}
