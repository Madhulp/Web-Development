// You have an array of objects that stores firstName and lastName values of your friends as follows:
let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
  ];
  let res=users.map(function(el){
    return el.firstName+" "+el.lastName
  })
  console.log(res);