function modalReady() {
	modal1 = ($(document.body)).find('.logInModal')
	modal2 = ($(document.body)).find('.registerModal')
	
	logInForm = $('.logIn');
	logInForm.hide();

	registerForm = $('.register');
	registerForm.hide();
}

function showLogIn() {
	hideModal2()
	modal1.empty();
	logInForm.show();
	modal1.append(logInForm);
	modal1.show();
	$('.modals').css({ 'z-index': '3', 'opacity': '1' });
}

function showRegister() {
	console.log(this)
	hideModal1();
 	modal2.empty();
 	modal2.append(registerForm);
 	registerForm.show();
 	modal2.show();
	$('.modals').css({ 'z-index': '3', 'opacity': '1' });
 }

function hideModal1() {
	modal1.hide();
	// $('.logInModal').css('display', 'none');
}

function hideModal2() {
	modal2.hide();
	// $('.registerModal').css('display', 'none');
}

function hideModals() {
	modal2.hide();
	modal1.hide();
	// $('.modals').css('display', 'none');
	

}


