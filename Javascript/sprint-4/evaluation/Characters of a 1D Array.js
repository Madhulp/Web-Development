function characters1DArray(N,str){
	//Enter Code 
	let char=["*","-","/"];
	let obj={}
	for(let i=0;i<char.length;i++){
	    let s=char[i];
	    obj[s]=i;
	}
	let a="";
	for(let j=0;j<N;j++){
	    for(let key in obj){
	        if(str[j]==key){
	            a=a+obj[key]
	        }
	    }
	}
	console.log(a);
}
	