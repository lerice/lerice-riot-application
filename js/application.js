/* The function to be called on successful body load */
$(function () {
	//Set the parallax scrolling on the dividing background images
	$('#back1').parallax("50%", 0.3);
	$('#back2').parallax("50%", 0.3);
	$('#back3').parallax("50%", 0.3);
	$('#back4').parallax("50%", 0.3);
	$('#back5').parallax("50%", 0.3);
	$('#back6').parallax("50%", 0.3);
	
	//Set the smooth scrolling between pages
	$('.nextdiv').localScroll(5000);
	
	//Set the slider for 'my abilities' page
	$('#sliderdiv').bjqs({
		//size of slider
		width: 800,
		height: 425,
		
		//animaiton values
		animtype: 'slide',
		animduration: 1000,
		automatic: false,
		
		//control and marker configuration
		showcontrols: true,
		centercontrols: true,
		nexttext: '>',
		prevtext: '<',
		showmarkers: true,
		centermarkers: true,
		
		//interaction values
		keyboardnav: true,
		hoverpause: true,
		
		//presentational options
		usecaptions: false,
		randomstart: false,
		responsive: true
	});
	
	//Set the pop up image to a maximum height - avoid covering the screen
	$('.bigimage').css("max-height", $(window).height() * 0.75);
	
	//Set the alert for when a user tries to resize their window!
	//Please don't harm the kittens :(
	$(window).resize(function() {
		$('#resizetab').css("opacity", "1");
		$('#resizetab').css("left", "50%");
		
		//Recalculate pop up image max height - avoid covering the screen
		$('.bigimage').css("max-height", $(window).height() * 0.75);
	});
});

function hideResize() {
	$('#resizetab').css("opacity", "0");
	$('#resizetab').css("left", "200%");
}

/* Self-produced jQuery and CSS for image pop ups. NO PLUG-IN USED! */
function showPopUp() {
	$('#fade').css("opacity", "0.8");
	$('#fade').css("height", "100%");
	disable_scroll();
}

function closePopUp() {
	$('#fade').css("opacity", "0");
	$('#fade').css("height", "0");
	$('.content').css("display", "none");
	enable_scroll();
}

function puiWins() {
	showPopUp();
	$('#PUIwins').css("margin-left", $('#PUIwins').width() * -0.5);
	$('#PUIwins').css("margin-top", $('#PUIwins').height() * -0.5);
	$('#PUIwins').css("display", "block");
}

function puiGoldS1() {
	showPopUp();
	$('#PUIgolds1').css("margin-left", $('#PUIgolds1').width() * -0.5);
	$('#PUIgolds1').css("margin-top", $('#PUIgolds1').height() * -0.5);
	$('#PUIgolds1').css("display", "block");
}

function puiPlat() {
	showPopUp();
	$('#PUIplat').css("margin-left", $('#PUIplat').width() * -0.5);
	$('#PUIplat').css("margin-top", $('#PUIplat').height() * -0.5);
	$('#PUIplat').css("display", "block");
}

function puiSinged() {
	showPopUp();
	$('#PUIsinged').css("margin-left", $('#PUIsinged').width() * -0.5);
	$('#PUIsinged').css("margin-top", $('#PUIsinged').height() * -0.5);
	$('#PUIsinged').css("display", "block");
}

function puiDiamond() {
	showPopUp();
	$('#PUIdiamond').css("margin-left", $('#PUIdiamond').width() * -0.5);
	$('#PUIdiamond').css("margin-top", $('#PUIdiamond').height() * -0.5);
	$('#PUIdiamond').css("display", "block");
}

function puiBracket() {
	showPopUp();
	$('#PUIbracket').css("margin-left", $('#PUIbracket').width() * -0.5);
	$('#PUIbracket').css("margin-top", $('#PUIbracket').height() * -0.5);
	$('#PUIbracket').css("display", "block");
}

function puiShirt() {
	showPopUp();
	$('#PUIshirt').css("margin-left", $('#PUIshirt').width() * -0.5);
	$('#PUIshirt').css("margin-top", $('#PUIshirt').height() * -0.5);
	$('#PUIshirt').css("display", "block");
}

function puiImpact() {
	showPopUp();
	$('#PUIimpact').css("margin-left", $('#PUIimpact').width() * -0.5);
	$('#PUIimpact').css("margin-top", $('#PUIimpact').height() * -0.5);
	$('#PUIimpact').css("display", "block");
}

/* Code to disable scrolling (useful when having CSS image-pop ups
		- WITHOUT removing the scrollbar from the visible window (ie by
		setting 'overflow: hidden' on body
   Taken from http://jsbin.com/disable-scrolling/1 */
var keys = [37, 38, 39, 40];

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
  preventDefault(e);
}

function disable_scroll() {
  if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', wheel, false);
  }
  window.onmousewheel = document.onmousewheel = wheel;
  document.onkeydown = keydown;
}

function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
}