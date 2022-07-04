function evenSumRows(N,M,arr){
    //write code here
    for(let i=0;i<N;i++){
        let sum=0;
        for(let j=0;j<M;j++){
            if(arr[i][j]%2==0){
                sum=sum+arr[i][j];
            }
        }
        console.log(sum);
    }
}
