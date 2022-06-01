//Apenas copie e cole tudo estará em ordem
//Just copy and paste everything will be in order
var firebaseConfig = {
  apiKey: "AIzaSyAQ-mdJR_HAsIEkuZVcdLZ_tPx5e_P5cUo",   //se você usar os meus dados seus
  authDomain: "fir-login-fe256.firebaseapp.com",       //usúarios se cadastrarão no meu banco de dados
  databaseURL: "https://fir-login-fe256-default-rtdb.firebaseio.com", 
  projectId: "fir-login-fe256",
  storageBucket: "fir-login-fe256.appspot.com",
  messagingSenderId: "956516962175",
  appId: "1:956516962175:web:b7b8ea7430420d9870544a",
  measurementId: "G-DXZYJVQ3DC"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();