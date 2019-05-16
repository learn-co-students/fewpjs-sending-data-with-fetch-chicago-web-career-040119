// // Add your code here
// window.addEventListener("DOMContentLoaded", function() {
//   function submitData( userName, userEmail ) {
//     let formData = {
//       name: userName,
//       email: userEmail
//     };
//
//     let configObj = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify(formData)
//     };
//
//     fetch('http://localhost:3000/users', configObj)
//       .then(response => response.json())
//       .then(object => console.log(object))
//
//   }
//   /////////// End Submit Data Funciton ///////////////
// });

function submitData( userName, userEmail ) {

  let formData = {
    name: userName,
    email: userEmail
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
  // fetch('http://localhost:3000/users', configObj)
  //   .then(response => response.json())
  //   .then(object => putOnPage(object.id))
  //   // .catch(error => console.log(error.message + "HEYYYYYYYYYYYYYY"))
  //   .catch(error => putErrorOnPage(error.message))
  return fetch('http://localhost:3000/users', configObj)
    .then( function ( response ) {
    return response.json()
    } )
    .then( function ( object ) {
      document.body.innerHTML = object[ "id" ]
    } )
    .catch( function ( error ) {
      document.body.innerHTML = error.message
    } )
  }

function putOnPage(content) {
  let successDiv = document.querySelector("body")
  let newItem = document.createElement("span")

  newItem.textContent = JSON.stringify(content)

  successDiv.appendChild(newItem)
}

function putErrorOnPage(message) {
  let errorDiv = document.querySelector(".error")
  let errorMessage = document.createElement("span")
  errorMessage.textContent = `${message}`

  errorDiv.appendChild(errorMessage)
}
