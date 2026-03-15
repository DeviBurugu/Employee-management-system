//upload image
// document.getElementById("submit").addEventListener("click", (event) => {
//     event.preventDefault(); 

//     let eid = document.getElementById("eid").value;
//     let imgFile = document.getElementById("img").files[0];

//     if (!eid || !imgFile) {
//         alert('Please enter eid and select an image.');
//         return ;
//     }

//     let formData = new FormData();
    
//     formData.append('img', imgFile);

//     try {
//        fetch(`http://localhost:8080/updateimg/${eid}`,
//          {
//             method: 'PUT',
//             body: formData,
//         });

//         const result = response.json();
//         if (result.success) {
//             alert('Image uploaded successfully!');
//             console.log(result);
//         } else {
//             alert('Image upload failed.');
//         }
//     } catch (error) {
//         console.error('Error uploading image:', error);
//         alert("failed to upload")
//     }
// });


// document.getElementById("fetchButton").addEventListener('click', () => {
//     let fetchEid = document.getElementById("fetchEid").value;

//     if (!fetchEid===null) {
//         alert('Please enter an eid to fetch the image.');
//         return;
//     }

//     try {
//     let response =  fetch(`http://localhost:8080/fetchimg/${fetchEid}` 
//     );
//     response.then((response)=>{
//         let y=response.blob()
//         return y
//     }).then((y)=>{
//         let imageBlob =  response.blob();
//         let imageUrl = URL.createObjectURL(imageBlob);

//         let imageDisplay = document.getElementById("imageDisplay");
//         imageDisplay.src = imageUrl;
//         imageDisplay.style.display = 'block'; // Show the image
//     })

//         if (!response.ok) {
//             throw new Error('Image not found');
//         }
//     } catch (error) {
//         console.error("Error fetching image:", error);
//         alert('Failed to fetch image. Please check the eid and try again.');
//     }
// });

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




