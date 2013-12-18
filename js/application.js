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
	$('body').addClass('stop-scrolling')
	$('#content').css("margin-left", $('#content').width() * -0.5);
	$('#content').css("margin-top", $('#content').height() * -0.5);
	$('#fade').css("display", "block");
	$('#content').css("display", "block");
}

function closePopUp() {
	$('#fade').css("display", "none");
	$('#content').css("display", "none");
	$('body').removeClass('stop-scrolling')
}

function imagePopUpWins() {
	$('#imagecaption').html("A screenshot of one of my teams best victories (dat KDA) against another Australian team in a local tournament.");
	$('#bigimage').attr("src", "images/trident_vs_interstellar.jpg");
	$('#bigimage').attr("alt", "Trident VS Interstellar score screen");
	imagePopUp();
}

function imagePopUpGoldS1() {
	$('#imagecaption').html("My beautiful profile page, diamond border and gold season 1 summoner icon :D");
	$('#bigimage').attr("src", "images/golds1.jpg");
	$('#bigimage').attr("alt", "Gold in Season 1");
	imagePopUp();
}

function imagePopUpPlat() {
	$('#imagecaption').html("2-0 up in my promotion series to Platinum in early Season 3. I won the next game to win the series :D");
	$('#bigimage').attr("src", "images/platinum.jpg");
	$('#bigimage').attr("alt", "Achieving Platinum");
	imagePopUp();
}

function imagePopUpSinged() {
	$('#imagecaption').html("My self-proclaimed godly Singed stats, the champion whom has carried me through countless Solo Queue games. (R.I.P AP Singed)");
	$('#bigimage').attr("src", "images/singed_stats.jpg");
	$('#bigimage').attr("alt", "Singed Stats Season 2");
	imagePopUp();
}

function imagePopUpDiamond() {
	$('#imagecaption').html("The all-gratifying cinematic when promoting to Diamond. My all time most memorable League moment.");
	$('#bigimage').attr("src", "images/diamond.jpg");
	$('#bigimage').attr("alt", "Achieving Diamond");
	imagePopUp();
}

function imagePopUpBracket() {
	$('#imagecaption').html("My team's (Team Down Under) bracket that we crushed through to reach top 16 in the Oceanic Season 3 Championship.");
	$('#bigimage').attr("src", "images/bracket.jpg");
	$('#bigimage').attr("alt", "Riot Oceanic S3 Tournament Bracket");
	imagePopUp();
}

function imagePopUpShirt() {
	$('#imagecaption').html("A sneaky photo of me playing in a tournament :x");
	$('#bigimage').attr("src", "images/teamshirt.jpg");
	$('#bigimage').attr("alt", "its me!");
	imagePopUp();
}