var firebaseConfig = {
      apiKey: "AIzaSyCYyCupPc27EFOBDSNoyBQE8wTGfd3zJNo",
      authDomain: "lets-chat-12211.firebaseapp.com",
      databaseURL: "https://lets-chat-12211-default-rtdb.firebaseio.com",
      projectId: "lets-chat-12211",
      storageBucket: "lets-chat-12211.appspot.com",
      messagingSenderId: "250489528492",
      appId: "1:250489528492:web:d3fdffb9d0bf50e82d3f09"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function Addroom()
{
      var room_name = document.getElementById("room_name").value;

      localStorage.setItem("room-name", room_name);

      firebase.database().ref("/").child(room_name).update({
            participants : "1+", purpose : "adding the user"
      });

      window.location = "Login_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("recent").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
var new_row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("recent").innerHTML += new_row;
      });});}
getData();

document.getElementById("user_name").innerHTML= "welcome"+" "+ localStorage.getItem("user_name") +"!";

function redirectToRoomName(recent_room)
{
      console.log(recent_room);
      localStorage.setItem("room-name", recent_room);
      window.location = "Login_page.html";
}

function Logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room-name");
      window.location ="index.html"
}
