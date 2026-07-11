console.log(localStorage.getItem("eid"));

// feching img 
fetch(`http://localhost:8080/fetchimg/${localStorage.getItem("eid")}`)
.then((response)=>response.blob())
.then((blob)=>{
    let url=URL.createObjectURL(blob)
    document.getElementById("fetchEid").setAttribute("src",url)
    // alert("hii")
})
.catch((error)=>{
    console.log("error image",error);
    alert("hello")
    
})
const fileInput=document.getElementById("imageDisplay")
fileInput.addEventListener('change',(event)=>{
    console.log();
    
    alert('FILE SELECTED'+event.target.files[0].name )
})
