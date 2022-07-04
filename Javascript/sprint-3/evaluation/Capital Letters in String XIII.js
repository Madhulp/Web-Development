function capitalLettersInStringXIII(N, str) {
	//write you code here
	let count=0;
	for(let i=0;i<N;i++){
	    if(str[i]==str[i].toUpperCase()){
	        count++;
	    }
	}
	console.log(13*count);
}
