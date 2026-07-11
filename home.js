let img = document.getElementsByTagName("img")
let name = document.getElementById("name")
let email = document.getElementById("email")
let sal = document.getElementById("sal")
let password = document.getElementById("password")
let address = document.getElementById("address")
let phno = document.getElementById("phno")
let eid=document.getElementById("eid")

//  local storage
let lname = localStorage.getItem("name")
let lemail = localStorage.getItem("email")
let lsal = localStorage.getItem("sal")
let lpassword = localStorage.getItem("password")
let laddress = localStorage.getItem("address")
let lphno = localStorage.getItem("phno")
let lid=localStorage.getItem("eid")
let limg=localStorage.getItem("img")
console.log(lid);

// 
eid.innerText=lid;
name.innerText=lname;
email.innerText=lemail ;
sal.innerText=lsal ;
password.innerText=lpassword;
address.innerText=laddress;
phno.innerText=lphno;
// console.log(lid.innerText=eid);

let update=document.getElementById("update")
update.addEventListener("click",()=>{
    open("./update.html","_self")
})
