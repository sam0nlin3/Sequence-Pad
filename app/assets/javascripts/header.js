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
  $.ajax({ 
      type: "POST",
      url: '/sessions',
      data: { username: $('#username').val(), password: $('#password').val()},
      success: function (data) {
        renderMenu(data)
      },
      error: function (data) {
        renderErrors(data.error())   
      } 
  });
}

function renderErrors(data){
  debugger;
  console.log(data)
};

function newRegister(){
  $.ajax({ 
      type: "POST",
      url: '/new_user',
      data: {"user" :{ username: $('#regName').val(), password: $('#regPW').val(), password_confirmation: $('#regPWcon').val()  }
  }}).done(renderMenu);
}

function renderMenu(data){ 
  ($('.menuDiv')).empty();
  console.log(data)
  $('<h1>').text('sequence').prependTo($('.menuDiv'));
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



