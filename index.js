function submitData(name, email) {
//to handle the response to fetch()
//to access the info from the server
//use series of calls to then() which are given function callbacks
return fetch('http://localhost:3000/users', { //1.send data
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({name, email})
})
//response is the arg = the obj sent from the server [Response][response]
//this obj has the method json()=>converts(parses)the contents of the body - from JSON to JS object
  .then(function(response) { //2.handle the response
    return response.json()
  })
  //return and made available in 2nd .then
  .then(function(object){
    document.body.innerHTML = object["id"] //acces the new object, find the new id and append this value to the DOM
  })
  .catch(function(error) {
    document.body.innerHTML = error.message//receive an obj with an error w .message property containing info about what went wrong
    //append message to the DOM when catch() is called
  });
}
