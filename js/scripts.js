// execute when DOM is fully loaded
$(function () {

	// detect resize of window
	$(window).resize(function () {
		var width = $(window).width();
		if (width < 768) {
			hide_sidebar();
		}
		else {
			show_sidebar();
		}
	});
	// toggle sidebar
	$("#topbar-toggler").click(toggle_sidebar);
});

function toggle_sidebar() {
	var display = $("#sidebar").css("display");

	if (display === "none") {
		show_sidebar();
	}
	else {
		hide_sidebar();
	}
}

/* Show sidebar */
function show_sidebar() {
	$("#sidebar").css("display", "flex");
	$(".wrapper").css("display", "grid");
	$(".wrapper").css("grid-template-columns", "270px 1fr");
	$(".wrapper").css("grid-template-areas", "'sidebar main'");
}

/* Hide sidebar */
function hide_sidebar() {
	$("#sidebar").css("display", "none");
	$(".wrapper").css("display", "unset");
	$(".wrapper").css("grid-template-columns", "none");
	$(".wrapper").css("grid-template-areas", "'main'");
}