/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let result = 0;
const last = 20;
let count = 1;

while(count <= last) {
  if((count % 2) === 1) {
    result += count;
  }
  count += 1;
}
console.log(result);

let sum = result;
