// Given an array of numbers generate an array containing the double value of the numbers

// Sample Input [1, 2] Sample Output [2, 4]

let num = [1, 2, 3, 4, 5]
let box = []
num.forEach(function (elem) {
    box.push(elem * 2);
})
console.log(box);
