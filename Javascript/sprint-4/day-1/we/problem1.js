let names=["Madhul",'Neha','Nikhil','Chunnu',"Madhul"];
let new_list=[];
let present=false;
for(let i=0;i<names.length;i++){
  let person=names[i];
  for(let j=0;j<new_list.length;j++){
    if(person==new_list[j]){
      present=true;
      break;
    }
  }
  if(person==false){
    new_list.push(person);
  }
}
console.log(new_list);