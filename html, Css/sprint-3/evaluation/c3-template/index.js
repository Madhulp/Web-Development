document.querySelector("form").addEventListener("submit", inventory);
let arr = []
function inventory(event) {
    event.preventDefault();
    let ProName = document.querySelector("#name").value;
    let ProCate = document.querySelector("#category").value;
    let Brand = document.querySelector("#brand").value;
    let Price = document.querySelector("#price").value;
    let Delivered = document.querySelector("#deliveredBy").value;
}

let obj = {
    proname: ProName,
    procate: ProCate,

}