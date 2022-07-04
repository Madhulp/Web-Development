function strongPassword(N,arr){
    //write code here
    let str="@,$,#,*";
    let jhola="";
    for(let i=0;i<=N-1;i++){
        let a=arr[i];
        let flag=0;
        for(let j=0;j<=a.length-1;j++){
            for(let k=0;k<=str.length-1;k++){
                if(a[j]===str[k]){
                    flag=1;break;
                }
            }
        }
        if(flag==1){
            jhola=jhola+"strong ";
        }else{
            jhola=jhola+"weak ";
        }    
    }
        console.log(jhola);
}
