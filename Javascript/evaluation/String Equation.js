function StringEquation(N, str) {
    //write code here
    let x=0;
    let y=0;
    let lower="abcdefghijklmnopqrstuvwxyz";
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0;i<=N-1;i++){
        let char=str[i];
        for(let j=0;j<=lower.length-1;j++){
            if(char===lower[j]){
               x++; 
            }
        }
      for(let k=0;k<=upper.length-1;k++){
          if(char===upper[k]){
          y++;
      }
    }
  }
      console.log(5*x + 3*y);
      }