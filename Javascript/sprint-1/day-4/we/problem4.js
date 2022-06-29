let stored_username='abc@123';
let stored_passsword='123';
let input_username='abc@1234';
let input_password='123';
if (stored_username==input_username){
  if (stored_passsword==input_password){
    console.log("User can login");
  }else{
    console.log("User can't login");
  }
}else{
  console.log("password not found");
}