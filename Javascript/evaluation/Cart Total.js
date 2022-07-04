function cartTotal(N, price, quantity) {
    let sum=0;
    for(let i=0;i<=price.length-1;i++){
        let product=price[i]*quantity[i];
        sum=sum+product;
    }
    console.log(sum);
}