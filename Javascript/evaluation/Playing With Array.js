function playingWithArray(N, arr){
    // Write your code here! 
        let sum1=0;
        let sum2=0;
        for(let i=0;i<=N-1;i++){
            if(arr[i]%2==0){
                sum1=sum1+arr[i];
            }if(arr[i]%2==1){
                sum2=sum2+arr[i];
            }
        }
        console.log(sum1*sum2);
    }