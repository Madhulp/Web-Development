// Problem 2: Use the above function to print the Primes from 2 to a given limit

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
  let limit=25;
  for(let i=2;i<=25;i++){
    let x=checkPrime(i);
    if(x==true){
      console.log(i,"Prime");
  }
  }