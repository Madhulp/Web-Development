// Problem 1 : Given a string count the number of words in that string

let string="I have wings";
if(string.length>0){
  let count=0;
  for(let i=0;i<string.length;i++){
    if(string[i]==" "){
      count++;
    }
  }
  console.log("This string contains",count+1,"words");
}else{
  console.log("This string contains",0,"words");
}