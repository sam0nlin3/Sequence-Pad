$(document).ready(function() {
  $(document.body).on('click', '.home', refresh);
  $('.menu').on('click', '#loginLink', showLogIn);

  $('.menu').on('click', '#registerLink', showRegister);
  $('.menu').on('click', '#userViewLink', showUserView);  
  $(document.body).on('click', '#exit', hideModals);
  $(document.body).on('click', '#signIn', newCurrentUser);
  $(document.body).on('click', '#register', newRegister);
  $('.menu').on('click', '.logOut', logOut);  
  fetchCurrentUser();
})

function refresh(){
  window.location.reload();
};

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
      data: { username: $('#username').val(), password: $('#username').val()  }
  }).done(renderMenu);
}

function newRegister(){
  $.ajax({ 
      type: "POST",
      url: '/new_user',
      data: { username: $('#regName').val(), password: $('#regPW').val(), password_confirmation: $('#regPWcon').val()  }
  }).done(renderMenu);
}


function renderMenu(data){ 
  ($('.menu')).empty();
  $('<h1>').text('sequence').prependTo($('.menu'));
  
  if ( data && data !== "null" ) {
    var loggedInUserName = $('<h2>').text(data.username) .attr('id',' userViewLink ');
    var logOutText = $('<h2>').addClass("logOut").text('log out')
    
    $('.menu').append(loggedInUserName)
              .append(logOutText);

  } else {
    var loginLink = $('<h2>').attr('id', 'loginLink').text(' log in ')
    var registerLink = $('<h2>').attr('id', 'registerLink').text(' register ')

    $('.menu').append(loginLink)
              .append(registerLink);  
  }             
hideModals();
}



