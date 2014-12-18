$(document).ready(function() {
  console.log('header');
  $(document.body).on('click', '.home', refresh);
  $('.menu').on('click', '#loginLink', showLogIn);
  $('.menu').on('click', '#registerLink', showRegister);
  $('.menu').on('click', '#userViewLink', showUserView);  
  $(document.body).on('click', '#exit', hideModals);
  $('.menu').on('click', '.logOut', logOut);
  modalReady();
  renderMenu();
})

function refresh(){
  window.location.reload();
};

function logOut(){
  $.get( "/logout").done(function(){
    window.location.reload();
  });
}

function renderMenu(){
  $('<h1>').text('sequence').prependTo($('header'));
  
  $('<h2>').text('home | ')
                .addClass('home')
                .attr('id', 'exit')
                .prependTo($('.menu'));
}

