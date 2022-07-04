let str="masai";
let obj={};
for(let i=0;i<str.length;i++){
  let char=str[i];
  if(obj[char]==undefined){
    obj[char]=1;
  }else{
    obj[char]++;
  }
}
console.log(obj);