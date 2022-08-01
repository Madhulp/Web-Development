// Write code related to Done page here
document.querySelector("form").addEventListener("submit",myTAsk)
let myTaskArr=JSON.parse(localStorage.getItem("task-list"))
function myTAsk(event){
    event.preventDefault()
    let obj={
        taskname:document.querySelector("#name").value,
        des:document.querySelector("#des").value,
        startdate:document.querySelector("#start").value,
        enddate:document.querySelector("#end").value,
    }
    myTaskArr.push(obj)
    localStorage.setItem("task-list",JSON.stringify(myTaskArr))
}