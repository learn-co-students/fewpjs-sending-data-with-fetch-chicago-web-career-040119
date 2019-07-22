// Add your code here

let usersUrl = 'http://localhost:3000/users'


function submitData(name, email){
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name,
      email
     })
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    document.body.innerHTML = object["id"];
    // const p = document.createElement("p");
    // p.textContent = object["id"];
    // document.body.appendChild(p)
  })
  .catch(function(error){
      document.body.innerHTML = error.message
    // const e = document.createElement("p");
    // e.textContent = error.message;
    // document.body.appendChild(e)
  });
}

submitData('sarah', 'sarah@gmail.com');
