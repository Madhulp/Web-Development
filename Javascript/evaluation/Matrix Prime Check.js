function matrixPrimeCheck(N, M, arr) {
    function checkPrime(n){
        let factor=0;
        for(let i=0;i<=n;i++){
            if(n%i===0){
                factor=factor+1;
            }
        }
        if(factor==2){
            return true;
        }else{
            return false;
        }
    }
    let bag=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[0].length;j++){
            if(checkPrime(arr[i][j])){
                bag++;
            }
        }
    }
    console.log(bag);
}