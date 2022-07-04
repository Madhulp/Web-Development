function countZerosOnesTwos(N,arr){
    //write code here
    let count0=0;
    let count1=0;
    let count2=0;
    for(let i=0;i<=N;i++){
        if(arr[i]==0){
            count0++;
        }if(arr[i]==1){
            count1++;
        }if(arr[i]==2){
            count2++;
        }
        
    }
    console.log(count0,count1,count2);
}
