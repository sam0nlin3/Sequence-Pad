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
	$(document.body).on('click', 'button', changeCurrentColor);
	$(document.body).on('mousedown', '.cell', activateCell);
	board = new Board();
})

var blue = '#2B4482';
var yellow = '#DAA520';
var purple = '#622163';
var green = '#4BC3A5';

var Board = function(){
	this.currentColor = "purple"
}

function fetchCells() {
	console.log('loaded')
	$.get('/').done(displayCells);
}

function changeCurrentColor() {
	var color = this.id;
	board.currentColor = color;
	console.log(board.currentColor);
}

function deactivate() {}


function displayCells(data){
	console.log('loaded')
	cellsContainer = $('<div>').addClass('cellsContainer');
	data.cells.forEach(renderCells);
}

function renderCells(data){
		var purple_audio = $('<audio>').attr('id', 'purple_audio')
		var purple_source = $('<source>').attr('src', data.purple_note).attr('type', 'audio/mpeg');

		var green_audio = $('<audio>').attr('id', 'green_audio')
		var green_source = $('<source>').attr('src', data.green_note).attr('type', 'audio/mpeg');

		var yellow_audio = $('<audio>').attr('id', 'yellow_audio')
		var yellow_source = $('<source>').attr('src', data.yellow_note).attr('type', 'audio/mpeg');

		var blue_audio = $('<audio>').attr('id', 'blue_audio')
		var blue_source = $('<source>').attr('src', data.blue_note).attr('type', 'audio/mpeg');
		
		purple_audio.append(purple_source);
		green_audio.append(green_source);
		yellow_audio.append(yellow_source);
		blue_audio.append(blue_source);
		
		var cell = $('<div>')
								.addClass('cell')
								.attr('row', data.row)
								.attr('active', data.active)
								.append(purple_audio)
								.append(green_audio)
								.append(yellow_audio)
								.append(blue_audio);
		cell.appendTo(cellsContainer)
		cellsContainer.appendTo($(document.body));
}

// Added the play audio when a cell is activated.
// Might want to remove this functionality eventually.
function activateCell() {
	if (this.active === board.currentColor) {
		this.active = "none";
		$(this).css("background-color", "whitesmoke");
	}
	else if (this.active = board.currentColor) {
		if (this.active === "blue") {
			$(this).css("background-color", blue);
			$(this).find('#blue_audio')[0].play();
		} else if (this.active === "purple") {
			$(this).css("background-color", purple);
			$(this).find('#purple_audio')[0].play();
		} else if (this.active === "yellow") {
			$(this).css("background-color", yellow);	
			$(this).find('#yellow_audio')[0].play();
		} else if (this.active === "green") {
			$(this).css("background-color", green);
			$(this).find('#green_audio')[0].play();		
		}	
	}	
}
