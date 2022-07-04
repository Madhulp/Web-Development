// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]

function lowerCase(input){
    let lower_case=[];
    for(i=0;i<=input.length-1;i++){
      lower_case.push(input[i].tolowerCase());
    }
    return lower_case;
  }
  let input=["MA","SA","I","SCH","OOL"];
  let catch_case=lowerCase(input);
  console.log(catch_case);