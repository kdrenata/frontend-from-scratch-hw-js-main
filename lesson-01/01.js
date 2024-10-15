// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
let sum = 0;
const last = 20;
let count = 1;

while(count <= last) {
    sum = sum + count;
    count = count + 1;
}
console.log(sum);