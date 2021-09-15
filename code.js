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
logItems(10);
