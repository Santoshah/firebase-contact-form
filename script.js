  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCOhNQbGqOK55Y-r5BHjtVxYYah_QCfGAs",
    authDomain: "contactform-9d194.firebaseapp.com",
    databaseURL: "https://contactform-9d194.firebaseio.com",
    projectId: "contactform-9d194",
    storageBucket: "contactform-9d194.appspot.com",
    messagingSenderId: "823302290223"
  };
  firebase.initializeApp(config);

  // Reference message collection
  var messagesRef = firebase.database().ref('messages');


var getInputValue = function(id){
	return document.getElementById(id).value;
}

document.querySelector('.alert').style.display = "none";

document.getElementById("frm").addEventListener("submit", submitForm);

function submitForm(e){

	e.preventDefault();

	var name    = getInputValue('name');
	var company = getInputValue('company');
	var email   = getInputValue('email');
	var phone   = getInputValue('phone');
	var message = getInputValue('message');

	saveMessage(name, company, email, phone, message);
	document.querySelector(".alert").style.display = "block";
	setTimeout(function(){
		document.querySelector(".alert").style.display = "none";
	},3000);

}

function saveMessage(name, company, email, phone, message) {
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		company: company,
		email:email,
		phone:phone,
		message:message
	});


}