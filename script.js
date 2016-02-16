"use strict";

var c = document.getElementById('album-cover');
var ctx = c.getContext('2d');
var albumTitle = document.getElementById('album-title').value;
var img = document.getElementById('image');
var coords = [
	[ 83,  88 ],
	[ 87,  295],
	[ 81,  548],
	[ 375, 187],
	[ 373, 412],
	[ 383, 680],
	[ 649, 170],
	[ 655, 424],
	[ 615, 665]
];

function multSpaceToOne(str){
	return str.replace(/ +(?= )/g, '');
}

function oneSpaceToTwo(str){
	return str.split(' ').join('  ');
}

function drawText(coords){
	var x = coords[0];
	var y = coords[1];
	for(var i = 0; i < 8; i++){
		ctx.fillText(albumTitle, x, y + (i * 30 * 1.1));
	}
}

function download(){
	location.href = document.getElementById('album-cover').toDataURL();
}

function getImage(file){
	img.src = URL.createObjectURL(file); 
	setTimeout(update, 100);
}

function update(){

	albumTitle = document.getElementById('album-title').value.toUpperCase();
	albumTitle = multSpaceToOne(albumTitle);
	albumTitle = oneSpaceToTwo(albumTitle);

	img = document.getElementById('image');

	ctx.fillStyle = '#F48E59';
	ctx.fillRect(0, 0, c.width, c.height);

	ctx.font = 'bold 20pt Helvetica, Arial';
	ctx.fillStyle = '#000';

	ctx.drawImage(img, 0, 0, img.width, img.height, 132, 788, 236, 165);

	for(var i = 0; i < coords.length; i++){
		drawText(coords[i]);
	}

}

onload = function(){
	document.getElementById('album-title').oninput = update;
	update();
}