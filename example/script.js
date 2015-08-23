document.addEventListener("DOMContentLoaded", function(event) { 
	//appends text to the body
    M('body').append('<h1>Hello Word </h1>');
    //appends text and colors background of div
    M('#myDiv').append('<h1>Meow Meow </h1>').bgColor('coral');
    //adds border 
    M('#myDiv').border("thick solid #0000FF");

});