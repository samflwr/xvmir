// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDashky16wVXY9jNljhEJyfBPZ-M0SnABE",
    authDomain: "contactform-83356.firebaseapp.com",
    databaseURL: "https://contactform-83356-default-rtdb.firebaseio.com",
    projectId: "contactform-83356",
    storageBucket: "contactform-83356.appspot.com",
    messagingSenderId: "940194378920",
    appId: "1:940194378920:web:8569ae54826cb4f310fe9d"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database()

function save() {
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  var username = document.getElementById('username').value
  var say_something = document.getElementById('say_something').value
  var favourite_food = document.getElementById('favourite_food').value

  database.ref('users/' + username).set({
    email : email,
    password : password,
    username : username,
    say_something : say_something,
    favourite_food : favourite_food
  })

}

function get() {
  var username = document.getElementById('username').value

  var user_ref = database.ref('users/' + username)
  user_ref.on('value', function(snapshot) {
    var data = snapshot.val()

    alert(data.email)

  })

}

function update() {
  var username = document.getElementById('username').value
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value

  var updates = {
    email : email,
    password : password
  }

  database.ref('users/' + username).update(updates)

  alert('updated')
}

function remove() {
  var username = document.getElementById('username').value

  database.ref('users/' + username).remove()

  alert('deleted')
}
