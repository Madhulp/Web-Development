function mapCharAndSum(N,K,str) {
    // Write code here
    let alphabet=["a",'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let object={};
    let sum=0;

    for(let i=0;i<alphabet.length;i++){
        let a=alphabet[i];
        object[a]=N;
        N++;
    }
    for(let i=0;i<str.length;i++){
        for (let key in object){
            if(str[i]==key){
               let value=object[key];
               sum=sum+value;
            }
        }
        
    }
    console.log(sum);
}
