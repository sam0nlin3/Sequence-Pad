function modalReady() {
	
	generateLogin();
  generateRegistration();

	modal1 = ($(document.body)).find('.logInModal')
	modal2 = ($(document.body)).find('.registerModal')
	modal3 = ($(document.body)).find('.userViewModal')
	
	logInForm = $('.logIn');
	logInForm.hide();

	registerForm = $('.register');
	registerForm.hide();

	userView = $('.userView');
	userView.hide();

}

function showLogIn() {
	hideModal2();
	hideModal3();
	modal1.empty();
	logInForm.show();
	modal1.append(logInForm);
	modal1.show();
	$('.modals').css({ 'z-index': '5', 'opacity': '.8' });
}

function showRegister() {
	console.log(this)
	hideModal1();
	hideModal3();
 	modal2.empty();
 	modal2.append(registerForm);
 	registerForm.show();
 	modal2.show();
	$('.modals').css({ 'z-index': '3', 'opacity': '.8' });
 }

 function showUserView() {
	console.log(this)
	hideModal1();
	hideModal2();
 	modal3.empty();
 	modal3.append(userView);
 	userView.show();
 	modal3.show();
	$('.modals').css({ 'z-index': '3', 'opacity': '.8' });
 }

function hideModal1() {
	modal1.hide();
	$('.logInModal').css({ 'z-index': '3', 'opacity': '0' });
}

function hideModal2() {
	modal2.hide();
	$('.registerModal').css({ 'z-index': '3', 'opacity': '0' });
}

function hideModal3() {
	modal3.hide();
	$('.registerModal').css({ 'z-index': '3', 'opacity': '0' });
}

function hideModals() {
	modal2.hide();
	modal1.hide();
	modal3.hide();
	$('.modals').css({ 'z-index': '3', 'opacity': '0' });
}

function generateLogin(){
	var logInDiv = $('.logIn');
	
	var exit = $('<div>').attr('id', 'exit');
	var userName = $('<input>').attr('id', 'username')
														 .attr('type', 'text')
														 .val('username');
	var password = $('<input>').attr('id', 'password')
														 .attr('type', 'password')
	var signIn = $('<button>').attr('id', 'signIn')
														.text('sign in');

	logInDiv.append(userName)
					.append(password)
					.append(signIn)
					.append(exit);
}

function generateRegistration() {
	var regDiv = $('.register')

	var exit = $('<div>').attr('id', 'exit');

	var regName = $('<input>').attr('id', 'regName')
														.attr('type', 'text')
														.val('username');
	var regPW = $('<input>').attr('id', 'regPW')
													.attr('type', 'password')

	var regPWcon = $('<input>').attr('id', 'regPWcon')
														 .attr('type', 'password')

	var register = $('<button>').attr('id', 'register')
														.text('register');									

	regDiv.append(regName)
				.append(regPW)
				.append(regPWcon)
				.append(register)
				.append(exit);
}

function generateUserView() {
	var userViewDiv = $('.userView')

	var exit = $('<div>').attr('id', 'exit');

	var userName = $('<div>').attr('id', 'userName')
														.text('username');
	var songs = $('<div>').attr('id', 'songs')
												.text('song1')																					
	userViewDiv.append(userName)
				.append(songs)
				.append(exit);
}










