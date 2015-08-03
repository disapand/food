$(function () {
	var musicOn = "on";
	var page_count = $('div[class^=p]').length;
	var current_page = 0;
	console.log(page_count);

	$("#btn_music").click(function(event) {
		if ( musicOn == "on" ) {
			$(this).css('background-position', '0');
			musicOn = "off";
		} else {
			$(this).css('background-position', '-30px');
			musicOn = "on";
		}
	});

	function nextPage () {
		if ( current_page < page_count - 1 ) {
			$("div[class^=p]:eq(" + current_page + ")").css('top', '-100%');;
			current_page ++ ;
		} 
		if ( current_page == 8 ) {
			$(".next_page").hide();
		}
	}

	$("#next_page").click(function(event) {
		nextPage();
	});

	$(document).wipetouch( {
		wipeUp: function () {
			alert("up");
		},
		wipeDown: function () {
			alert("down");
		}
	} );

} );