function sumOfMultiples(n,k,y) {
    //write code here
    let sum=0;
    for(let i=1;i<=k;i++){
        if(i*n%y==0){
            sum=sum+i*n;
        }
    }
    console.log(sum);
}
