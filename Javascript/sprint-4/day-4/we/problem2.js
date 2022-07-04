let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ];
  let row=arr.length;
  let col=arr[0].length;
  let bag="";
  for(let i=0;i<row;i++){
    if(i%2==0){
      for(let j=0;j<col;j++){
        bag=bag+arr[i][j]+" ";
      }
    }else{
      for(let j=col-1;j>=0;j--){
        bag=bag+arr[i][j]+" ";
      }
    }
  }
  console.log(bag);