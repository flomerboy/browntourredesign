$(document).ready(function(){

	introductionHeight = $("#introduction").offset().top // This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
	console.log("introduction height: " + introductionHeight + "px");
	logisticsHeight = $("#logistics").offset().top // This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
	console.log("logistics height: " + logisticsHeight + "px");
	contentHeight = $("#content").offset().top // This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
	console.log("content height: " + contentHeight + "px");
	tipsHeight = $("#tips").offset().top // This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
	console.log("tips height: " + tipsHeight + "px");
	wh = $(window).height(),      						// Height of window (visible part).
	wt = $(window).scrollTop(),
	dh = $(document).height(),
	heightVal = (wt/(dh-wh));				//this value starts high and ends low

 readHeight = function(){
		wh = $(window).height(),      					// Height of window (visible part).
		wt = $(window).scrollTop(),
		//console.log('wt= ' + wt);
		dh = $(document).height(),
    	heightVal = (wt/(dh-wh));				//this value starts high and ends low
	},

draw = function(){
		if (wt < logisticsHeight) {
			$("#introductionMenu").css("color","rgb(255,50,50)");
			$("#logisticsMenu").css("color","rgb(0,0,0)");
			$("#contentMenu").css("color","rgb(0,0,0)");
			$("#tipsMenu").css("color","rgb(0,0,0)");
		} else if (wt < contentHeight){
			$("#introductionMenu").css("color","rgb(0,0,0)");
			$("#logisticsMenu").css("color","rgb(255,50,50)");
			$("#contentMenu").css("color","rgb(0,0,0)");
			$("#tipsMenu").css("color","rgb(0,0,0)");
		} else if (wt < tipsHeight){
			$("#introductionMenu").css("color","rgb(0,0,0)");
			$("#logisticsMenu").css("color","rgb(0,0,0)");
			$("#contentMenu").css("color","rgb(255,50,50)");
			$("#tipsMenu").css("color","rgb(0,0,0)");
		} else {
			$("#introductionMenu").css("color","rgb(0,0,0)");
			$("#logisticsMenu").css("color","rgb(0,0,0)");
			$("#contentMenu").css("color","rgb(0,0,0)");
			$("#tipsMenu").css("color","rgb(255,50,50)");
		}		
	}

	readHeight();
	draw();

	$(document).scroll(function(){
		readHeight();
		draw();
	});


// Click event for any anchor tag that's href starts with #
 $('a[href^="#"]').click(function(event) {

    // The id of the section we want to go to.
    var id = $(this).attr("href");

    // An offset to push the content down from the top.
    var offset = 0;

    // Our scroll target : the top position of the
    // section that has the id referenced by our href.
    var target = $(id).offset().top - offset;

    // The magic...smooth scrollin' goodness.
    $('html, body').animate({scrollTop:target}, 300);

    //prevent the page from jumping down to our section.
    event.preventDefault();
 });

 $(".menu").click(function(){
    $(".menu").addClass(".focus");
});

});