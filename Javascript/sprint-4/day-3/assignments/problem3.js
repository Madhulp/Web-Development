let name=["Rice","Dal","Salt"];
let len=name.length;
let quantity=[2,3,1];
let price=[60,50,20];
let data=[];
for(let i=0;i<len;i++){
  let obj={}
  obj.name=name[i]
  obj.quantity=quantity[i];
  obj.price=price[i];
  data.push(obj)
}
console.log(data);
let sum=0;
for(let i=0;i<data.length;i++){
  sum=sum+data[i].quantity*data[i].price;
}
console.log("Total",sum);