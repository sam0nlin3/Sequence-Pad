// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {
	console.log('loaded');
	fetchCells();
	$(document.body).on('click', '#exit', hideModals);	
	$(document.body).on('click', 'button.color', changeCurrentColor);
	$(document.body).on('mouseover', 'button.color', hoverColor);
	$(document.body).on('mouseout', 'button.color', removeHover);		
	$(document.body).on('click', 'button.background', changeBackground);
	$(document.body).on('click', 'button.play', looper);
	$(document.body).on('click', 'button.pause', pauseLoop);
	$(document.body).on('click', 'button.clear', clearBoard);
	$(document.body).on('click', 'button.save', fetchUserForSaveSongForm);
	$('.modals').on('click', 'button#submitSong', saveSong)
	$(document.body).on('click', '.cell', activateCell);
	board = new Board();
	modalReady();
})

var blue = '#196D85';
var yellow = '#F1BF28';
var purple = '#4B177E';
var green = '#166C3F';
var red = '#7F3649';
var brown = '#99412E'
var active_blue = '#5ADBFF';
var active_yellow = '#FFE468';
var active_purple = '#972EFE';
var active_green = '#4FDE95';
var active_red = '#FF81A1'
var active_brown = '#FF8168'



var Board = function(){
	this.currentColor = "purple";
	this.playStatus = false;
} 

function fetchCells() {
	console.log('loaded')
	$.get('/').done(displayCells);
}


// function fetchCellsforRenderSaved(userId, songId) {
// 	console.log('fetching cell data to re-render cells from saved')
// 	$.get('/users/'+userId+'/songs'+songId).done(renderSavedSong);
// }

function changeCurrentColor() {
	var color = this.id;
	board.currentColor = color;
	if (board.currentColor === 'blue') {
		$(this).css('background-color', active_blue)
	} else if (board.currentColor === 'yellow') {
		$(this).css('background-color', active_yellow)
	} else if (board.currentColor === 'green') {
		$(this).css('background-color', active_green)
	} else if (board.currentColor === 'purple') {
		$(this).css('background-color', active_purple)
	} else if (board.currentColor === 'red') {
		$(this).css('background-color', active_red)
	} else if (board.currentColor === 'brown') {
		$(this).css('background-color', active_brown)
	}
	resetButtons();
	console.log(board.currentColor);
}

// These next two functions are needed since the hover in Sass in no longer functions,
// since we the button colors are being altered in the above function, whether that button is
// being hovered or not.
function hoverColor() {
	if (this.id !== board.currentColor) {
		if (this.id === 'blue') {
			$(this).css('background-color', active_blue)
		} else if (this.id === 'yellow') {
			$(this).css('background-color', active_yellow)
		} else if (this.id === 'green') {
			$(this).css('background-color', active_green)
		} else if (this.id === 'purple') {
			$(this).css('background-color', active_purple)
		} else if (this.id === 'red') {
			$(this).css('background-color', active_red)
		} else if (this.id === 'brown') {
			$(this).css('background-color', active_brown)
		}
	}
}

function removeHover() {
	if (this.id !== board.currentColor) {
		resetButtons();
	}
}

function resetButtons() {
	if (board.currentColor !== 'yellow') {
		$('#yellow').css('background-color', yellow);
	}
	if (board.currentColor !== 'green') {
		$('#green').css('background-color', green);	
	}
	if (board.currentColor !== 'blue') {
		$('#blue').css('background-color', blue);	
	}
	if (board.currentColor !== 'purple') {
		$('#purple').css('background-color', purple);	
	}
	if (board.currentColor !== 'brown') {
		$('#brown').css('background-color', brown);	
	}		
	if (board.currentColor !== 'red') {
		$('#red').css('background-color', red);	
	}	
}


function displayCells(data){
	console.log('loaded')
	data.cells.forEach(renderCells);
}

function renderCells(data){
		var purple_audio = $('<audio>').attr('id', 'purple_audio')
		var purple_source = $('<source>').attr('src', data.purple_note).attr('type', 'audio/mpeg');

		var green_audio = $('<audio>').attr('id', 'green_audio')
		var green_source = $('<source>').attr('src', data.green_note).attr('type', 'audio/wav');

		var yellow_audio = $('<audio>').attr('id', 'yellow_audio')
		var yellow_source = $('<source>').attr('src', data.yellow_note).attr('type', 'audio/wav');

		var blue_audio = $('<audio>').attr('id', 'blue_audio')
		var blue_source = $('<source>').attr('src', data.blue_note).attr('type', 'audio/mpeg');

		var red_audio = $('<audio>').attr('id', 'red_audio')
		var red_source = $('<source>').attr('src', data.red_note).attr('type', 'audio/wav'); 

		var brown_audio = $('<audio>').attr('id', 'brown_audio')
		var brown_source = $('<source>').attr('src', data.brown_note).attr('type', 'audio/wav');
		
		purple_audio.append(purple_source);
		green_audio.append(green_source);
		yellow_audio.append(yellow_source);
		blue_audio.append(blue_source);
		red_audio.append(red_source);
		brown_audio.append(brown_source);
		
		var cellsContainer = $('.cellsContainer')

		var cell = $('<div>')
								.addClass('cell')
								.attr('row', data.row)
								.attr('active', "none")
								.attr('column', data.column)
								.append(purple_audio)
								.append(green_audio)
								.append(yellow_audio)
								.append(blue_audio)
								.append(red_audio)
								.append(brown_audio)
		cell.appendTo(cellsContainer)
}

function activateCell() {
	if (this.getAttribute('active') === board.currentColor) {
		this.setAttribute('active', 'none');
		$(this).css("background-color", "dimgray");
	} else {
		this.setAttribute('active', board.currentColor)
		if (this.getAttribute('active') === 'blue') {
			$(this).css("background-color", blue);
			// $(this).find('#blue_audio')[0].play();
		} else if (this.getAttribute('active') === "purple") {
			$(this).css("background-color", purple);
			// $(this).find('#purple_audio')[0].play();
		} else if (this.getAttribute('active') === "yellow") {
			$(this).css("background-color", yellow);	
			// $(this).find('#yellow_audio')[0].play();
		} else if (this.getAttribute('active') === "green") {
			$(this).css("background-color", green);
			// $(this).find('#green_audio')[0].play();		
		} else if (this.getAttribute('active') === "red") {
			$(this).css("background-color", red);
			// $(this).find('#red_audio')[0].play();
		}	else if (this.getAttribute('active') === "brown") {
			$(this).css("background-color", brown)
			// $(this).find('#brown_audio')[0].play();
		};
	};		
}

var resetColors = function(){
	var cellDivs = ($('div.cell'))
	for (var i = 0; i < cellDivs.length; i++) {
		$(cellDivs[i]).css('background-color', 'dimgray')
		if (cellDivs[i].getAttribute('active') === "blue" ) {
			$(cellDivs[i]).css('background-color', blue)
		} else if ( cellDivs[i].getAttribute('active') === "purple") {
			$(cellDivs[i]).css('background-color', purple)
		} else if ( cellDivs[i].getAttribute('active') === "yellow") {
			$(cellDivs[i]).css('background-color', yellow)
		} else if ( cellDivs[i].getAttribute('active') === "green") {
			$(cellDivs[i]).css('background-color', green)
		} else if ( cellDivs[i].getAttribute('active') === "red") {
			$(cellDivs[i]).css('background-color', red)
		} else if ( cellDivs[i].getAttribute('active') === "brown") {
			$(cellDivs[i]).css('background-color', brown)
		}
	};				
};

var cellLoop = function(column){
	for (var i = 0; i < 12; i++) {
		if (column[i].getAttribute('active') === "blue" ) {
			$(column[i]).find('#blue_audio')[0].play();
			$(column[i]).css('background-color', active_blue)

		} else if ( column[i].getAttribute('active') === "purple") {
			$(column[i]).find('#purple_audio')[0].play();
			$(column[i]).css('background-color', active_purple)

		} else if ( column[i].getAttribute('active') === "yellow") {
			$(column[i]).find('#yellow_audio')[0].play();
			$(column[i]).css('background-color', active_yellow)

		} else if ( column[i].getAttribute('active') === "green") {
			$(column[i]).find('#green_audio')[0].play();
			$(column[i]).css('background-color', active_green)

		} else if ( column[i].getAttribute('active') === "red") {
			$(column[i]).find('#red_audio')[0].play();
			$(column[i]).css('background-color', active_red)

		} else if ( column[i].getAttribute('active') === "brown") {
			$(column[i]).find('#brown_audio')[0].play();
			$(column[i]).css('background-color', active_brown)
		};
	};	
};

function columnLoop() {
	console.log('play loop')

var columnsArray = [];

	column1 = $( "[class='cell'][column='1']" );
	column2 = $( "[class='cell'][column='2']" );
	column3 = $( "[class='cell'][column='3']" );
	column4 = $( "[class='cell'][column='4']" );
	column5 = $( "[class='cell'][column='5']" );
	column6 = $( "[class='cell'][column='6']" );
	column7 = $( "[class='cell'][column='7']" );
	column8 = $( "[class='cell'][column='8']" );
	column9 = $( "[class='cell'][column='9']" );
	column10 = $( "[class='cell'][column='10']" );
	column11 = $( "[class='cell'][column='11']" );
	column12 = $( "[class='cell'][column='12']" );
	column13 = $( "[class='cell'][column='13']" );
	column14 = $( "[class='cell'][column='14']" );
	column15 = $( "[class='cell'][column='15']" );
	column16 = $( "[class='cell'][column='16']" );

columnsArray.push( column1, column2, column3, column4, column5, column6,
  								 column7, column8, column9, column10, column11, column12,
  								 column13, column14, column15, column16 )


	// for (var i = 0; i < 16; i++) {
	// 	setTimeout(function(){	
	// 	cellLoop(columnsArray[i])}, interval += 250);
	// }  
				// WHY DOESN'T THIS LOOP WORK!! 

	var interval = 0;
	setTimeout(function(){	
		cellLoop(columnsArray[0])}, interval = 250);
	setTimeout(function(){
		cellLoop(columnsArray[1])}, interval = 500);
	setTimeout(function(){
		cellLoop(columnsArray[2])}, interval = 750);
	setTimeout(function(){
		cellLoop(columnsArray[3])}, interval = 1000);
	setTimeout(function(){
		cellLoop(columnsArray[4])}, interval = 1250);
	setTimeout(function(){
		cellLoop(columnsArray[5])}, interval = 1500);
	setTimeout(function(){
		cellLoop(columnsArray[6])}, interval = 1750);
	setTimeout(function(){
		cellLoop(columnsArray[7])}, interval = 2000);
	setTimeout(function(){
		cellLoop(columnsArray[8])}, interval = 2250);
	setTimeout(function(){
		cellLoop(columnsArray[9])}, interval = 2500);
	setTimeout(function(){
		cellLoop(columnsArray[10])}, interval = 2750);
	setTimeout(function(){
		cellLoop(columnsArray[11])}, interval = 3000);	
	setTimeout(function(){
		cellLoop(columnsArray[12])}, interval = 3250);	
	setTimeout(function(){
		cellLoop(columnsArray[13])}, interval = 3500);	
	setTimeout(function(){
		cellLoop(columnsArray[14])}, interval = 3750);	
	setTimeout(function(){
		cellLoop(columnsArray[15])}, interval = 4000);
}	

var looper = function(){
	if (board.playStatus === false) {	
		columnLoop();
		setTimeout(resetColors, 300);
		playInterval = setInterval(columnLoop, 4000);
		colorResetInterval = setInterval(resetColors, 300);
		board.playStatus = true;
	}
	else {
		return;
	}	
}	
	
function pauseLoop() {
	if (board.playStatus === true){ 
		board.playStatus = false;
		clearInterval(playInterval);
		colorResetInterval = setInterval(resetColors, 300);
		clearInterval(colorResetInterval);
	}	
}

function clearBoard(){
	pauseLoop()
	var cellDivs = ($('div.cell'))
	for (var i = 0; i < cellDivs.length; i++) {
		cellDivs[i].setAttribute('active', 'none');
		$(cellDivs[i]).css("background-color", 'dimgray');
	};
}

function changeBackground(){
	if ( $(document.body).css('background-color' === 'rgb(0,0,0)' ) ) {
		$(document.body).css('background-color', 'rgb(255,255,255)')
	}	else if ( $(document.body).css('background-color' === "rgb(255,255,255)") ) {
		$(document.body).css('background-color', 'rgb(0,0,0)' )
	}
}	

function saveSong(){
	console.log('saving...')
	var activeStatusArray = [];
	var cellDivs = ($('div.cell'))
	for (var i = 0; i < cellDivs.length; i++){
		activeStatusArray.push(cellDivs[i].getAttribute('active'))
	}
	var activeStatusString = activeStatusArray.join(" ")
  var userId = $('h3').attr('userId');
  $.ajax({ 
      type: "POST",
      url: '/users/' + userId +'/songs',
      data: {"song" :{ 
      	title: $('#songTitle').val(), 
      	song_string: activeStatusString, 
      	user_id: userId }
  }}).done(hideModals);
}

function activateSavedSong(){
	var songString = $(this).closest('.songObject').attr('songstring')
	var songArray = songString.split(" ")
	var cellDivs = ($('div.cell'))
	
	for (var i = 0; i < cellDivs.length; i++) {
		cellDivs[i].setAttribute('active', songArray[i])
	};
	resetColors();
	hideModals();
}









