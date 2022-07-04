// Given a string swap the case and print the output Sample Input - Test Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block
let character="Test OF the MONTh";
function toSwapcase(hero){
  let lower="abcdefghijklmnopqrstuvwxyz ,";
  let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ ,";
  let bag="";
  for(let i=0;i<=hero.length-1;i++){
    let char=hero[i];
    for(let j=0;j<=lower.length-1;j++){
      if(char=lower[j]){
        bag+=upper[j];
      }else if(char==upper[j]){
        bag+=lower[j];
      }
    }
  }
  return bag;
}
let basket=toSwapcase(character);
console.log(basket);
