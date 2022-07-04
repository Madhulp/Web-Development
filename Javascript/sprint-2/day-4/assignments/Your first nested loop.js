function yourFirstNested(num) {
    // Write code here
    for(let i=1;i<=num;i++){
        let bag="";
        for(let j=1;j<=num;j++){
            bag=bag+j+" ";
        }
        console.log(bag);
    }
}
