function yourFirstPattern(n) {
    // Write code here
    for(let i=1;i<=n;i++){
        let bag="";
        for(let j=1;j<=n;j++){
            bag=bag+"*"+" ";
        }
        console.log(bag);
    }
}