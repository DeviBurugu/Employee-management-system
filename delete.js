// Fetching data from localStorage
let leid = localStorage.getItem("eid");

// Targeting the input fields
let eidInput = document.getElementById("eid");

// Giving values to input fields
eidInput.value = leid;

// Targeting the delete button
let delete1 = document.getElementById("delete1");

delete1.addEventListener("click", (e) => {
  e.preventDefault();

  // Constructing the employee object (just for logging, not used in the fetch)
  let employee = {
    eid: leid,
  };
  console.log(employee);

  // Sending the DELETE request with the correct 'eid' in the URL
  let x = fetch(`http://localhost:8080/deleteemployee/${leid}`, {
    method: "DELETE",
  });

  // Handling the response
  x.then((response) => {
    console.log(response);
    if (response.ok) {
      localStorage.removeItem("eid");
      alert("Deleted successfully");
      open("./home.html")
      // Optionally, redirect or clear other fields as needed
    } else {
      alert("Failed to delete");
    }
  }).catch((error) => {
    console.error("Error:", error);
    alert("An error occurred");
  });
});