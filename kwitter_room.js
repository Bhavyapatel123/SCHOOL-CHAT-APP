var firebaseConfig = {
    apiKey: "AIzaSyDL-24nlJDOiguab_XJm8um9EbSDt6tjSg",
    authDomain: "kwitter-77f01.firebaseapp.com",
    databaseURL: "https://kwitter-77f01-default-rtdb.firebaseio.com",
    projectId: "kwitter-77f01",
    storageBucket: "kwitter-77f01.appspot.com",
    messagingSenderId: "805388190228",
    appId: "1:805388190228:web:55da93b367a4690bdc1d01"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
