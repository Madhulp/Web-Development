// Problem 3: Use the same function to print Non-Primes from 2 to a given limit

function checkPrime(num){
    let factors=0;
    for(i=1;i<=num;i++){
      if(num%i==0){
        factors++;
      }
    }
    if(factors==2){
      return true;
    }else{
      return false;
    }
  }
  let start=2;
  let end=25;
  for(let i=start;i<=end;i++){
    let x=checkPrime(i);
    if(x==false){
      console.log(i,"Not Prime");
    }
  }