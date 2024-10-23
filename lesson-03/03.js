// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(first, second, third) {
    let max = first
    if (second > max) {
        max = second
    }
    if (third > max) {
        max = third
    }
    return max
}