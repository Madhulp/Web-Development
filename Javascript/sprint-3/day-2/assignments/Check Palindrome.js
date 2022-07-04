function checkPalindrome(N, str) {
    //write code here
    let x="";
    for(let i=N-1;i>=0;i--){
        x=x+str[i];
    }
    if(x==str){
        console.log("Yes");
    }else{
        console.log("No");
    }
  
}
