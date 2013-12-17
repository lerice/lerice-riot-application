$(function () {
	$('#back1').parallax("50%", 0.3);
	$('#back2').parallax("50%", 0.3);
	$('#back3').parallax("50%", 0.3);
	$('#back4').parallax("50%", 0.3);
	$('#back5').parallax("50%", 0.3);
	$('#back6').parallax("50%", 0.3);
	
	$('.nextdiv').localScroll(5000);
});

function imagePopUp() {
	document.getElementById('fade').style.display='block';
	document.getElementById('light').style.display='block';
	$('body').addClass('stop-scrolling')
}

function closePopUp() {
	document.getElementById('fade').style.display='none';
	document.getElementById('light').style.display='none';
	$('body').removeClass('stop-scrolling')
}