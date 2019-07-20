// Add your code here

function submitData(name, email) {
  let formData = {
    name: name,
    email: email
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configObj)
    .then( resp => resp.json() )
    .then( obj => document.body.innerHTML = obj.id )
    .catch( errors => document.body.innerHTML = errors.message );
};
