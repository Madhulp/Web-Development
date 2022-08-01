// Given an array of numbers find the sum of odd elements Sample Input - [1, 2, 3, 4] Sample Output - 4
let arr=[1,2,3,4]
let res=arr.filter(function(el){
    return el%2==1
})

let out=res.reduce(function(acc,el){
    return acc+el
})
console.log(out)

// -OR-

// let arr=[1,2,3,4]
// let res=arr.filter(function(el){
//     return el%2==1
// }).reduce(function (acc,el){
//     return acc+el
// })
// console.log(res);

// -OR-

// let arr=[1,2,3,4];
// let isOdd=function(el){
//     return el%2==1;
// };
// let summer =function (acc,el){
//     return acc+el
// };
// let res=arr.filter(isOdd).reduce(summer);
// console.log(res)

