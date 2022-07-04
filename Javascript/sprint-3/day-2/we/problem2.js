// Problem 2 : Given a string in lower case convert it to upper case

let name="masai school";
let lower="abcdefghijklmnopqrstuvwxyz ";
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
let bag="";
for(let i=0;i<name.length;i++){
  let char=name[i];
  for(let j=0;j<lower.length;j++){
    if(char==lower[j]){
      bag=bag+upper[j];
    }
  }
}
console.log(bag);