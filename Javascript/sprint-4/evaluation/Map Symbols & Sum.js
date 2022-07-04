function mapSymbolsSum(N, str) {
    let special_char=["!","@","#","$","%","^","&","*"];
    let sum=0;
    for(let i=0;i<=N-1;i++){
        for(let j=0;j<special_char.length;j++){
            if(str[i]===special_char[j]){
                sum=sum+j+1;
            }
        }
    }
        console.log(sum);
    }
