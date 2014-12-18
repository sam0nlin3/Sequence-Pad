function modalReady() {
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
	hideModal2()
	hideModal3();
	modal1.empty();
	logInForm.show();
	modal1.append(logInForm);
	modal1.show();
	$('.modals').css({ 'z-index': '3', 'opacity': '.8' });
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


