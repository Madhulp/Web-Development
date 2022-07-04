let data=[
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
];
let sum1=0;
for(i=0;i<data[0].students[1].marks.length;i++){
  sum1=sum1+data[0].students[1].marks[i];
}
console.log(data[0].grade+"-"+data[0].students[1].name+"-"+sum1)

let sum2=0;
for(i=0;i<data[1].students[1].marks.length;i++){
  sum2=sum2+data[1].students[1].marks[i];
}
console.log(data[1].grade+"-"+data[1].students[1].name+"-"+sum2)

let sum3=0;
for(i=0;i<data[2].students[1].marks.length;i++){
  sum3=sum3+data[2].students[1].marks[i];
}
console.log(data[2].grade+"-"+data[2].students[1].name+"-"+sum3)
