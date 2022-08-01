// Given an array of numbers print the product of all numbers

// Sample Input - [2,3,4] Sample Output - 24

let num=[1,2,3,4,5]
let res=num.reduce(function(sum,el){
    return sum*el;
})
console.log(res);