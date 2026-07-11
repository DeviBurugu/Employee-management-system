
let a = 10

let submit = document.getElementById("submit")
submit.onclick = (e) => {
  console.log(a);

  e.preventDefault();
  let name = document.getElementById("name").value
  let sal = document.getElementById("sal").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let phno = document.getElementById("phno").value;
  let address = document.getElementById("address").value;

  let employee = {
    name: name,
    sal: sal,
    address: address,
    email: email,
    password: password,
    phno: phno
  }
  console.log(employee);

  console.log(employee)
  fetch("http://localhost:8080/registration", {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee)

  })
  
}

let passworderror=document.getElementById("passworderror")
password.addEventListener("keyup",()=>{
  let password=document.getElementById("password").value
  let upper=/[A-Z]/
  let lower=/[a-z]/
  let sc=/[@#$%^&*!~]/
  if(upper.test(password)==false) {
    passworderror.innerText=("password must contain uppercase")
    passworderror.style.color="red"
    document.getElementById("password").style.outlineColor="red"
  }
  else if(lower.test(password)==false){
    passworderror.innerText=("password must contain lowercase")
   document.getElementById("password").style.outlineColor="red"
  }
  else if (sc.test(password)==false) {
    passworderror.innerText=("password must contain special character")
   document.getElementById("password").style.outlineColor="red"
  }
  else if(password.length < 8) {
     passworderror.innerText=("password must contain 8 character")
   document.getElementById("password").style.outlineColor="red"
  }
  else {
    passworderror.innerText=""
     document.getElementById("password").style.outlineColor="black"
  }

})
