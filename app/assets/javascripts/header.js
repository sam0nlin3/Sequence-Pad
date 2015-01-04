$(document).ready(function() {
<<<<<<< HEAD
||||||| merged common ancestors
  $(document.body).on('click', '.home', refresh);
  $('.menu').on('click', '#loginLink', showLogIn);

  $('.menu').on('click', '#registerLink', showRegister);
  $('.menu').on('click', '#userViewLink', showUserView);  
=======
  $(document.body).on('click', '.home', refresh);
  $('.menu').on('click', '#loginLink', showLogIn);
  $('.menu').on('click', '#registerLink', showRegister);
  $('.menu').on('click', '#userViewLink', showUserView);  
>>>>>>> 54ffcfefe6af238f4fd158ee18f458880e507192
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
      data: { username: $('#username').val(), password: $('#password').val()  }
  }).done(renderMenu);
}

function newRegister(){
  $.ajax({ 
      type: "POST",
      url: '/new_user',
      data: { username: $('#userame').val(), password: $('#regPW').val(), password_confirmation: $('#regPWcon').val()  }
  }).done(renderMenu);
}

function renderMenu(data){ 
  ($('.menuDiv')).empty();
  $('<h1>').text('sequence').prependTo($('.menuDiv'));
  
  if ( data && data !== "null" ) {
    var loggedInUserName = $('<h2>').text(data.username).attr('id', 'userViewLink');
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



