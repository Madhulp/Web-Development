function appearOnce(N, arr) {
    //write code here
    let obj={}
    for(let i=0;i<=N-1;i++){
        let char=arr[i];
        if(obj[char]===undefined){
            obj[char]=1;
        }
        else{
            obj[char]++;
        }
    }
    let count=0;
    for(let key in obj){
        if(obj[key]==1){
            count=count+Number(key);
        }
    }
    console.log(count);
  }