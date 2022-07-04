function mapNumbers(N,K){
    //write code here
    let num=[];
    for(let i=1;i<=N;i++){
        num.push(i)
    }
    let count=K;
    for(let i=0;i<N;i++){
        console.log(num[i]+"-"+count);
        count++;
    }
    
    
}