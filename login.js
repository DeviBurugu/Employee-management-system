let submit = document.getElementById("submit")
submit.addEventListener("click",(e) => {
    e.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value;
    console.log(email,password);
    let employee={
        email:email,
        password:password
    }
    
    let p1 = fetch(`http://localhost:8080/login/${email}/${password}`,{
        method:'GET',
        // body:JSON.stringify(employee)
    })  
    
    console.log(p1);
    p1.then((response)=> {
        console.log(response);
        return response.json()
    }).then((data) => {
        console.log(data);
        localStorage.setItem("eid", data.data.eid)
        localStorage.setItem("name", data.data.name)
        localStorage.setItem("sal", data.data.sal)
        localStorage.setItem("email", data.data.email)
        localStorage.setItem("password", data.data.password)
        localStorage.setItem("phno", data.data.phno)
        localStorage.setItem("address", data.data.address)
    
      alert("login successfully")
        open("./home.html", "_self")
    })

    
    
})
