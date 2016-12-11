$(function(){
	$(".toggle-fullscreen").on("click", function(){

		if(location.hash == "#open"){
			$(".toggle-fullscreen").attr("href", "#close");
		}
		else {
			$(".toggle-fullscreen").attr("href", "#open");
		}

	});

	setInterval(
		function(){
			$(".toggle-fullscreen").removeClass("pulse");
			$(".toggle-fullscreen").addClass("pulse");
			// $(".blog").removeClass("pulse");
		}, 
		3000
	);


	$("a[data-toggle='tab']").on("shown.bs.tab", function (e) {

		$(".tab-pane").removeClass("fadeIn");
		$(".tab-pane").removeClass("animated");
		$("#" + $(e.target).attr("aria-controls")).addClass("fadeIn");

		// new WOW().init();

		// e.target.addClass("fadeIn");
		// e.relatedTarget.removeClass("fadeIn");

		  // e.target // newly activated tab
		  // e.relatedTarget // previous active tab
	});



});


hashChange();
$(window).on('hashchange',function(){ 
	hashChange();
});

function hashChange(){

	if(location.hash == "#open"){
		$("#intro").removeClass("col-md-12");
		$("#intro").addClass("col-md-4");
	}
	else if(location.hash == "#close") {
		$("#intro").removeClass("col-md-4");
		$("#intro").addClass("col-md-12");
	}
}