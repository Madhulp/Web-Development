function category(N,arr){
    //write code here
    let count="";
    for(let i=0;i<=arr.length;i++){
        if(arr[i]%3===0 && arr[i]%5===0){
            count+=3+" ";
        }else if(arr[i]%5===0){
            count+=2+" ";
        }else if(arr[i]%3===0){
            count+=1+" ";
        }
    }
    console.log(count);
    
    
    
}