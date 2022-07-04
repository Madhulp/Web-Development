

function mapSymbols(N) {
    // Write code here
    let alphabet=["!","@","#","$","%","^","&","*"];
    let count=N;
    for(let i=0;i<alphabet.length;i++){
        console.log(alphabet[i]+"-"+count)
        count=count+2;
    }
    
}
