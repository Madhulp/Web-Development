function sumOfIndexes(N,M,arr){
    //write code here
    for(let index=0;index<N;index++){
        let bag="";
        let sum=0;
        for(let j=0;j<M;j++){
            sum=sum+index+j;
            bag=bag+sum+" ";
            sum=0;
        }
        console.log(bag);
    }
}