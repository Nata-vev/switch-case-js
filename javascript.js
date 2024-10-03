
// 1. Створити функцію - калькулятор, яка буде приймати два числа та оператор (+, -, /, *) і буде повертати результат вказаної операції над числами. Використати конструкцію switch...case.
// Зробити перевірки у функціях для запобігання виконання розрахунків з некоректними даними.

const calculator = function (number1, number2, operator) {
  if (typeof number1 !== "number" || isNaN(number1)) {
    throw new TypeError('number1 must be correct');
  }
  if (typeof number2 !== "number" || isNaN(number2)) {
    throw new TypeError('number2 must be correct');
  }
  if (typeof operator !== "number" || isNaN(operator)) {
    throw new TypeError('operator must be correct');
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

// 2. За допомогою будь якого циклу знайти суму чисел від 1 до 100 ( 1 + 2 + 3 + ... + 100 ) та вивести її на екран.
// Розв'язати завдання за допомогою кожного відомого вам циклу.

// let sum = 0;
// let i = 1;
// while (i <= 100) {
//   sum += i; i++;
// }
// console.log(sum);

// let sum = 0;
// let i = 1;
// do{
//   sum += i; i++;
// }while (i <= 100);
// console.log(sum);


let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);


// 3. Пропонувати користувачу розв'язувати рівняння (2 + 2 * 2) до тих пір, поки користувач не надасть правильну відповідь.
// Розв'язати завдання за допомогою кожного відомого вам циклу.


// let answer;
// while (answer !== 6) {
//   answer = +prompt('Solve this (2 + 2 * 2)');
//   if (answer === 6) {
//     alert('You are right');
//   }
//   else {
//     alert('You are wrong. Please try again');
//   }
// };

// let answer;
// do {
//   answer = +prompt('Solve this (2 + 2 * 2)');
//   if (answer === 6) {
//     alert('You are right');
//   }
//   else {
//     alert('You are wrong. Please try again');
//   }
// } while (answer !== 6);


for (let answer; answer !== 6;) {
  answer = +prompt('Solve this (2 + 2 * 2)');
  if (answer === 6) {
    alert('You are right');
  }
  else {
    alert('You are wrong. Please try again');
  }
};


