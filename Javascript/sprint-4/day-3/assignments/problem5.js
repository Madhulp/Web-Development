let str="amsterdam";
let obj={}
for(let i=0;i<str.length;i++){
  let char=str[i];
  if(char in obj){
    obj[char]+=1;
  }else{
    obj[char]=1;
  }
}
let arr="";
for(let key in obj){
  if(obj[key]==1){
    arr=arr+key;
  }
}
console.log(arr);