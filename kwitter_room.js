
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7ePpqLcdI_zMpJmt9AOdQrldlvl9JuyQ",
    authDomain: "kwitter-project-9aec4.firebaseapp.com",
    projectId: "kwitter-project-9aec4",
    storageBucket: "kwitter-project-9aec4.appspot.com",
    messagingSenderId: "325121628618",
    appId: "1:325121628618:web:d52e734f1d65f56acd9733"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
