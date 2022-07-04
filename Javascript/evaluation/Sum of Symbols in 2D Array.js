function symbolsAndNumbers(N, M, arr){
    //enter code here
        let sum=0;
        let str=["$","%","*"];
        for(let i=0;i<=N-1;i++){
            for(let j=0;j<=M-1;j++){
                for(let k=0;k<=str.length-1;k++){
                    if(arr[i][j]===str[k]){
                        sum=sum+k+7;
                    }
                } 
            }
        }
        console.log(sum);
    }