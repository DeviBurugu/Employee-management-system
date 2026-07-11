// fetching data from local storage
let leid=localStorage.getItem("eid")
let lname = localStorage.getItem("name")
let lemail = localStorage.getItem("email")
let lsal = localStorage.getItem("sal")
let lpassword = localStorage.getItem("password")
let laddress = localStorage.getItem("address")
let lphno = localStorage.getItem("phno")

// targeting the input tags
let eid=document.getElementById("eid")
let name=document.getElementById("name")
let email=document.getElementById("email")
let sal=document.getElementById("sal")
let password=document.getElementById("password")
let phno=document.getElementById("phno")
let address=document.getElementById("address")
let update=document.getElementById("update")

// giving values in input fields
eid.value=leid
name.value=lname
email.value=lemail
sal.value=lsal
password.value=lpassword
phno.value=lphno
address.value=laddress

// adding event to update btn 
update.addEventListener("click",(e)=>{
    e.preventDefault();
   let employee ={
    eid : leid ,
    name :name.value ,
    email : email.value ,
    sal : sal.value ,
    password : password.value ,
    phno : phno.value,
    address : address.value
   }
   console.log(employee);
   let x=fetch(`http://localhost:8080/update`,{
    method : "POST" ,
    headers: { "Content-Type": "application/json" },
    body : JSON.stringify(employee)
   })
   console.log(x);
   x.then((respone)=>{
    console.log(respone);
    if(respone.ok){
        localStorage.setItem("name",name.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)
        localStorage.setItem("sal",sal.value)
        localStorage.setItem("phno",phno.value)
        localStorage.setItem("address",address.value)
        alert("update succesfully")
        open("./home.html")
    }else{
        alert("not update the data ")
    }
   })
})

