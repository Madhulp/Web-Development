// Create an object with the following functionality
// Ability to add student details and 3 subject marks
// Methods to find the student with the least and highest total
let details={
    data:[],
    addStudents:function(nam,hin,mat,phy){
      // i have to make obj of student detail and add it inside the data array.
      let obj={}
      obj.name=nam;
      obj.hindi=hin;
      obj.maths=mat;
      obj.physics=phy;
      this.data.push(obj);
    },
    low_marks:function(){
      let notebook=infinity;
      let lowStudent;
      for(let i=0;i<this.data.length;i++){
        let total=this.data[i].maths+this.data[i].hindi+this.data[i].physics;
        if(total<notebook){
          notebook=total;
          lowStudent=this.data[i];
        }
      }
      console.log(lowstudent.name,"has the lowest marks");
    }
  };
  details.addStudents("Madhul",70,67,34);
  details.addStudents("Jayshree",90,67,80);
  details.addStudents("Neha",23,56,78);
  
  