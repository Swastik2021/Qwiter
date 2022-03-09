const firebaseConfig = {
      apiKey: "AIzaSyBmMd1SVz6ykXRCwX8ptcoTRsIA4Wsl7Ow",
      authDomain: "qwitter-witter.firebaseapp.com",
      databaseURL: "https://qwitter-witter-default-rtdb.firebaseio.com",
      projectId: "qwitter-witter",
      storageBucket: "qwitter-witter.appspot.com",
      messagingSenderId: "522052697549",
      appId: "1:522052697549:web:6a57a1874ee8890c0bd884"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("User-name")
document.getElementById("user_name").innerHTML= "Welcome "+user_name;
function addRoom(){
      room_name=document.getElementById("room_name").value;
      localStorage.setItem("Room_Name", room_name);
      firebase.database().ref('/').child(room_name).update({
            purpose: " adding_room_name"
      })
      window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='RedirectRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
function RedirectRoomName(name){
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("User-name");
      localStorage.removeItem("Room_name");
      window.location="index.html";
}
