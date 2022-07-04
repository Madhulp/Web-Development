function mapCharAgain(N) {
    // Write code here
    let alphabets=["a",'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let count=N;
    for(let i=0;i<26;i++){
        console.log(alphabets[i]+"-"+count);
        count++;
    }
    
}