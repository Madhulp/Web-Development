// Given an array of numbers find the sum of cubes if the number is divisible by 3 Sample Input 
// - [1, 2, 3, 4, 5, 6] Sample Output - 243 (27+216)
let arr = [1, 2, 3, 4, 5, 6]
let res = arr.filter(function (el) {
    return el % 3 == 0
})

let div = res.map(function (el) {
    return el ** 3
})

let final = div.reduce(function (acc, el) {
    return acc + el
})
console.log(final)



