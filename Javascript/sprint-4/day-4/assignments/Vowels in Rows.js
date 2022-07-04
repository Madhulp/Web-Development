function vowelsInRows(N,M,arr){
    //write code here
    for(let i=0;i<N;i++){
        let flag=0;
        for(let j=0;j<M;j++){
            if(arr[i][j]==="a"||arr[i][j]==="e"||arr[i][j]==="i"||arr[i][j]==="o"||arr[i][j]==="u"){
                flag=1;
            }
        }
        if(flag==1){
            console.log("Yes");
        }else{
            console.log("No");
        }
    }
}