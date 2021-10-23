
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu45YHMfeGA8s5wOk4dEH6vInrNu8dSzI",
  authDomain: "kwitter-app-32a19.firebaseapp.com",
  projectId: "kwitter-app-32a19",
  storageBucket: "kwitter-app-32a19.appspot.com",
  messagingSenderId: "768900066441",
  appId: "1:768900066441:web:0abd94e6dc5ef57796aa58"
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
