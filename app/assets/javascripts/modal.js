function modalReady() {
	 
	generateLogin();
  generateRegistration();

	modal1 = ($(document.body)).find('.logInModal');
	modal2 = ($(document.body)).find('.registerModal');
	modal3 = ($(document.body)).find('.userViewModal');
	modal4 = ($(document.body)).find('.saveSongModal')
	
	logInForm = $('.logIn');
	logInForm.hide();

	registerForm = $('.register');
	registerForm.hide();

	userView = $('.userView');
	userView.hide();

	saveSong = $('.saveSongForm');
	saveSong.hide();

	menuShow = false; // set global var to prevent re-hiding menu on mouseover event
	menu = $('.menuDiv');
	$('.menuDiv').css({'height': '0', 'opacity': '0' });
}

function showMenu() {
	if (menuShow === false){
		menu.hide();
		$('.menuDiv').css({ 'height': 'auto', 'opacity': '1' });
		menu.slideDown('700', "swing");
		menuShow = true;
	} 	
}

function showLogIn() {
	hideModal2();
	hideModal3();
	hideModal4();
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
	hideModal4();
 	modal2.empty();
 	registerForm.show();
 	modal2.append(registerForm);
 	modal2.show();
	$('.modals').css({ 'z-index': '3', 'opacity': '.8' });
}

function showUserView() {
	console.log("hi")
	hideModal1();
	hideModal2();
	hideModal4();
 	modal3.empty();
 	modal3.append(userView);
 	userView.show();
 	modal3.show();
	$('.modals').css({ 'z-index': '3', 'opacity': '.8' });
}

function showSaveSongForm(){
	console.log('showing save song form')
	hideModal1();
	hideModal2();
	hideModal3();
	saveSong.show();
	modal4.append(saveSong);
	modal4.show();
	$('.modals').css({ 'z-index': '5', 'opacity': '.8' })
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

function hideModal4() {
	modal4.hide();
	$('.saveSongModal').css({ 'z-index': '3', 'opacity': '0' });
}

function hideModals() {
	modal1.hide();
	modal2.hide();
	modal3.hide();
	modal4.hide();
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

function fetchUserForUserView(){
	console.log("test")
	$.get('/get_current_user').done(generateUserView);
};	

function generateUserView(data) {
	console.log(data)
	if ($('#userName').length === 0 ){
		var userViewDiv = $('.userView');

		var exit = $('<div>').attr('id', 'exit');

		var userName = $('<div>').attr('id', 'userName')
															.text(data.username);
		var songs = $('<div>').attr('id', 'songs')
													.text('songs: ' + data.songs)																					
		userViewDiv.append(userName)
					.append(songs)
					.append(exit);
	}		
	showUserView();	
}

function fetchUserForSaveSongForm(){
	console.log("fetching current user data")
	$.get('/get_current_user').done(generateSaveForm);
}

function generateSaveForm(data) {
	console.log(data)
	var formDiv = $('.saveSongForm');
	var user = $('<h6>').text(data.username).attr('userId', data.id);
	var exit = $('<div>').attr('id', 'exit');
	var songTitle = $('<input>').attr('id', 'songTitle')
															.attr('type', 'text')
															.val('Song Title');
	var submitSong = $('<button>').attr('id', 'submitSong')
																.text('save song');
	formDiv.append(user)
				 .append(songTitle)
				 .append(exit)
				 .append(submitSong);			 
	showSaveSongForm();			 															
};







