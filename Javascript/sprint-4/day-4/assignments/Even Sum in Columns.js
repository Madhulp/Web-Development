function evenSumColumns(N,M,arr){
    //write code here
    for(let i=0;i<M;i++){
        let sum=0;
        for(let j=0;j<N;j++){
            if(arr[j][i]%2===0){
                sum=sum+arr[j][i];
            }
        }
        console.log(sum);
    }
}