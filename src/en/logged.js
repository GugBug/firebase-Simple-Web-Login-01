firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML =  "Hello, we have identified it as: " + user.email
        //will write in tag  <p id="user">           "message" + example@example.com
        //you can change the message and even delete these comments
    }
})

function logout(){
    firebase.auth().signOut()
}
document.getElementById("email").innerHTML = user.email