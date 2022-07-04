let name=["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let age=[32, 30, 26, 28, 44];
let data=[];
for(let i=0;i<name.length;i++){
  let obj={};
  obj['name']=name[i];
  obj['age']=age[i];
  data.push(obj);
}
console.log(data);