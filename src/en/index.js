document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
  })
  
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("logged.html")
    }
  })
  
  function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
  }
  
  function signUp(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
  }
  
  function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("The link has been sent to: " + email)
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
  }