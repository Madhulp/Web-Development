let sales=[
    { item:"PS4 Pro", stock:3, original:399.99},
    {item:"Xbox One X",stock:1,original:499.99,discount:0.1},
    {item:"Nintendo Switch",stock:4,original:299.99},
    {item:"PS2 Console",stock:1,original:299.99,discount:0.8},
    {item:"Nintendo 64",stock:2,original:199.99,discount:0.65}
  ];
  let arr=[];
  for(let i=0;i<sales.length;i++){
    let obj={}
    let newArray=[];
    for(let key in sales[i]){
      newArray.push(key);
    }
    let checkDis=newArray.includes("discount");
    if(checkDis){
      obj.discount=sales[i].discount;
      obj.item=sales[i].item;
      obj.original=sales[i].original;
      let saleValue=Math.abs((sales[i].original*sales[i].discount)-sales[i].original);
      obj.sale=saleValue;
      let stocks=sales[i].stock;
      obj.stock=stocks;
      obj.total=saleValue*stocks;
      arr.push(obj);
    }else{
      obj.item=sales[i].item;
      obj.original=sales[i].original;
      let sal=sales[i].original;
      obj.sale=sal;
      let stocks=sales[i].stock;
      obj.stock=stocks;
      obj.total=sal*stocks;
      arr.push(obj)
    }
  }
  console.log(arr);
  
  
  
  