// Problem 3: Print a box patterns using *
for(let a=1;a<=10;a++){
    let result="";
    for (let b=1;b<=10;b++){
      if(a==1||a==10){
        result=result+"*";
      }else{
        if(b==1||b==10){
          result=result+"*";
        }else{
          result=result+" "
        }
      }
    }
    console.log(result);
  }