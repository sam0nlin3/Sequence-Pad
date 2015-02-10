$(document).ready(function() {
  $(document.body).on('click', '#exit', hideModals);
  $(document.body).on('click', '#signIn', newCurrentUser);
  $(document.body).on('click', '#register', newRegister);
  $('.menuDiv').on('mouseover', showMenu);
  $('.menuDiv').on('click', '#loginLink', showLogIn);
  $('.menuDiv').on('click', '#registerLink', showRegister);
  $('.menuDiv').on('click', '#userViewLink', fetchUserForUserView);  
  $('.menuDiv').on('click', '.logOut', logOut);  
  fetchCurrentUser();
})

function logOut(){
  $.get( '/logout' ).done(renderMenu);
}

function fetchCurrentUser(){
  $.get('/get_current_user').done(renderMenu);
}

function newCurrentUser(){
  var logInDiv = $('.logIn').css('height', '250px');
  $.ajax({ 
      type: "POST",
      url: '/sessions',
      data: { username: $('#username').val(), password: $('#password').val()},
      success: function (data) {
        renderMenu(data)
      },
      error: function (data) {
        showLoginErrors()   
      } 
  });
}

function showLoginErrors(){
  var logIn = $('.logIn')
  logIn.css('height', '350px')
  if ($('.errorMessageDiv').length <= 1) {
    var errorMessageDiv = $('<div>').addClass('errorMessageDiv');
    errorMessageDiv.html('<h3>username and/or password do not match our records. please try again</h3>');
    errorMessageDiv.appendTo(logIn)
  }  
};

function newRegister(){
  var logInDiv = $('.register').css('height', '330px');
  $.ajax({ 
      type: "POST",
      url: '/new_user',
      data: {"user" :{ username: $('#regName').val(), password: $('#regPW').val(), password_confirmation: $('#regPWcon').val()  }},
      success: function (data) {
        renderMenu(data)
      },
      error: function (data) {
        showRegisterErrors(data)   
      }   
  });
}  

function showRegisterErrors(data){
  var register = $('.register')
  register.css('height', '425px')
  if ($('.errorMessageDiv').length <= 1) {
    var errorMessageDiv = $('<div>').addClass('errorMessageDiv');
    errorMessageDiv.html('<h3>there was an error with you registation information. please try again</h3>');
    errorMessageDiv.appendTo(register)
  }  
};


function renderMenu(data){ 
  ($('.menuDiv')).empty();
  console.log(data)
  $('<h1>').text('sequence pad').prependTo($('.menuDiv'));
  if ( data.current_user && data.current_user !== "null" ) {
    var loggedInUserName = $('<h2>').text(data.current_user.username).attr('id', 'userViewLink');
    var logOutText = $('<h2>').addClass("logOut").text('log out')
    $('.menuDiv').append(loggedInUserName)
                 .append(logOutText);
  } else {
    var loginLink = $('<h2>').attr('id', 'loginLink').text(' log in ')
    var registerLink = $('<h2>').attr('id', 'registerLink').text('register')
    $('.menuDiv').append(loginLink)
                 .append(registerLink);  
  }    
  hideModals();
}



