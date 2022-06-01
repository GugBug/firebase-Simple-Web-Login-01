firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "Olá, nós o identificamos como: " + user.email 
        //ira escrever na tag <p id="user">         "mensagem" + example@example.com
        //você pode mudar a mensagem é até deletar esses comentarios
        
    }
})

function logout(){
    firebase.auth().signOut()
}
document.getElementById("email").innerHTML = user.email