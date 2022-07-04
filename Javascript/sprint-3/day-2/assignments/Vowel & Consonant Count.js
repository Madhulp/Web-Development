function vowelAndConsonantCount(N, str) {
    //write code here
      let vowel_count=0;
      let consonant_count=0;
        for(let i=0;i<=N-1;i++){
            if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
                vowel_count=vowel_count+1;
            }else {
                consonant_count=consonant_count+1;
            }
        }
      console.log(vowel_count,consonant_count);
  }
      
  