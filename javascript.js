const calculator = function (number1, number2, operator) {
  if (typeof number1 !== "number" ||
    typeof number2 !== "number" ||
    isNan(number1 - number2)) {
    return null;
  }
  switch (operator) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      return number1 / number2;
    default:
      return 'Wrong operator'
  }
};


// let sum = 1;
// let i = 2;
// while (i <= 100) {
//   sum += i; i++;
// }
// console.log(sum);

let sum = 1;
  for (let i = 2; i <= 100; i++) {
    sum += i;
  }
  console.log(sum);


  // let answer;
  // while(answer !==6){
  //   answer = +prompt('Solve this (2 + 2 * 2)');
  //   if (answer === 6){
  //     alert('You are right');
  //   }
  //   else{
  //     alert('You are wrong. Please try again');
  //   }
  // };
        