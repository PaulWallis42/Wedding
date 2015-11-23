//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
}

//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}


//Drop down Menu

( function( $ ) {
$( document ).ready(function() {
// Cache the elements we'll need
var menu = $('#cssmenu');
var menuList = menu.find('ul:first');
var listItems = menu.find('li').not('#responsive-tab');

// Create responsive trigger
menuList.prepend('<li id="responsive-tab"><a href="#">Menu</a></li>');

// Toggle menu visibility
menu.on('click', '#responsive-tab', function(){
	listItems.slideToggle('fast');
	listItems.addClass('collapsed');
});
});
} )( jQuery );
