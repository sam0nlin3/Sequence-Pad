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

$(function() {
	fetchCells();
})

function fetchCells() {
	$.get('/').done(displayCells);
}

function displayCells(data){
	console.log(data);
	debugger;
	data.forEach(renderCell);
}

function renderCell(data){
	console.log(data);
	var cellContainer = $('<div>').addClass('cellContainer');
	var column = $('<div>').addClass('column').attr('id', data.column);

	column.appendTo(cellContainer);

	var cell = $('<div>').addClass('cell').attr('row', date.row);

	cell.appendTo(cellContainer);

}
