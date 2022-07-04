// Problem 2: Print Prime Numbers from 1 to given limit
let limit=25;
for(let i=1;i<=limit;i++){
  let N=i;
  let fact=0;
  for(let j=1;j<=N;j++){
    if(N%j==0){
      fact=fact+1;
    }
  }
if (fact==2){
  console.log(N,"Prime");
}else{
  console.log(N,"Not Prime");
}
}