let a=1;
sum=0;
count=0;
while(a<=100){
  if (a%2==0){
    sum=sum+a;
    count++;
  }
  a++;
}
console.log(sum/count);