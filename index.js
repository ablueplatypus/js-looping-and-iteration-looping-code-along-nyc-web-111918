// // Code your solutions in this file
// function printBadges(arr){
//
//   for (let i = 0; i < arr.length; i++) {
//     console.log(i);
//     // let message = `Welcome ${arr[i]}! You are employee #${i + 1}.`
//     // console.log(message);
//   }
// }
function printBadges(arr){

  for (let i = 0; i < arr.length; i++) {
    let message = `Welcome ${arr[i]}! You are employee #${i + 1}.`
    console.log(message);
  }
  return arr;
}

function tailsNeverFails() {
  let count = 0;
    while (Math.random() >= 0.5){
      count++;
    }
    return `You got ${count} tails in a row!`;
}
