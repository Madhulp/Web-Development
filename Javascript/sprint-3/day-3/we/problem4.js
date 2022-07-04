// Problem 4: Write a function to check if the char is a small case or not.

function check(char){
    let lower="abcdefghijklmnopqrstuvwxy";
    for(let i=0;i<lower.length;i++){
      if(char==lower[i]){
        return true;
      }
    }
    return false;
  }
  let x=check("Z");
  if(x===true){
    console.log("Small Case");
  }else{
    console.log("Capital Case");
  }