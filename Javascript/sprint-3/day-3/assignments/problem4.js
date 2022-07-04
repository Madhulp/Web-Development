// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average

function avg(arr){
    let sum=0;
    let count=0;
    if(arr.length==0){
      return 0;
    }
    for(i=0;i<arr.length;i++){
      sum=sum+arr[i];
      count++
    }
    return sum/count
  }
  let array=[1,2,3,4,5,6,7,8];
  let x=avg(array);
  console.log(x);