// Problem 3 : Given an array of string count the overall total number of characters

let superheros=["Batman","Superman","Spiderman","Ironman"];
let sum=0;
for(let i=0;i<superheros.length;i++){
  let x=superheros[i];
  sum=sum+x.length;
}
console.log(sum);