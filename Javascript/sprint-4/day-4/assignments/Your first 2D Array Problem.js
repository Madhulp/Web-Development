function array2D(N,M,arr){
    //write code here
    for(let i=0;i<N;i++){
        let result="";
        for(let j=0;j<M;j++){
            result=result+arr[i][j]+" ";
        }
        console.log(result);
    }
}