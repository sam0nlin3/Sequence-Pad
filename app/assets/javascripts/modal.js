function modalReady() {
	logInForm = $('#login-form');
	logInForm.remove();
	registerForm = $('#register-form');
	registerForm.remove();
	modal = $('modal');
	modal.find('form').remove();
}

function showLogIn() {
	$('.form-container').empty();
	modal.find('.form-container').append(logInForm);
	logInForm.show();
	modal.show();
}

function showRegister() {
 	$('.form-container').empty();
 	modal.find('.form-container').append(registerForm);
 	registerForm.show();
 	modal.show();
 }


function hideModal() {
	$('#modal').hide();
}