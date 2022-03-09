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
//YOUR FIREBASE LINKS
room_name = localStorage.getItem("Room_Name");
user_name=localStorage.getItem("User-name")
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            like:0,
            name:user_name,
            message:msg,
             
      })
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
            console.log(firebase_message_id);
            console.log(message_data);
            name = message_data['name'];
            like = message_data['like'];
            message = message_data['message'];
            name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
            message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
            like_button ="<button class='btn btn-primary' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
            span_with_tag ="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>"
            row= name_with_tag + message_with_tag + like_button + span_with_tag;
            document.getElementById("output").innerHTML += row
//Start code

//End code
      } });  }); }
getData();
function update_like(message_id){
console.log("clicked on this like button"+message_id)
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
})

}
function logout(){
      localStorage.removeItem("User-name");
      localStorage.removeItem("Room_name");
      window.location="index.html";
}
