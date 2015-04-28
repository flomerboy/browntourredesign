$(document).ready(function(){
	$( "#logisticsSubMenu" ).addClass("hide");

 	readHeight = function(){
 		introductionHeight = $("#introduction").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("introduction height: " + introductionHeight + "px");
		logisticsHeight = $("#logistics").position().top // This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("logistics height: " + logisticsHeight + "px");
		contentHeight = $("#content").offset().top // This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("content height: " + contentHeight + "px");
		tipsHeight = $("h1#tips").offset().top // This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("tips height: " + tipsHeight + "px");

		dayOfHeight = $("#dayOfHeader").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("day of height: " + dayOfHeight + "px");
		liabilityHeight = $("#liabilityHeader").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("liability height: " + liabilityHeight + "px");
		accessibilityHeight = $("#accessibilityHeader").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("accessibility height: " + accessibilityHeight + "px");
		mentorGuidesHeight = $("#mentorGuidesHeader").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("mentor Guides height: " + mentorGuidesHeight + "px");
		substitutionPolicyHeight = $("#substitutionPolicyHeader").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("substitutionPolicy: " + substitutionPolicyHeight + "px");

		basicsHeight = $("#basicsHeader").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("basics height: " + basicsHeight + "px");
		routeOverviewHeight = $("#routeOverviewHeader").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("route Overview height: " + routeOverviewHeight + "px");
		quietGreenHeight = $("#quietGreenHeader").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("quiet Green height: " + quietGreenHeight + "px");
		johnHayHeight = $("#johnHayHeader").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("johnHay height: " + johnHayHeight + "px");
		rockHeight = $("#rockHeader").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("rock height: " + rockHeight + "px");
		vanWinkleGatesHeight = $("#vanWinkleGatesHeader").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("vanWinkleGates: " + vanWinkleGatesHeight + "px");
		collegeStHeight = $("#collegeStHeader").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("collegeSt: " + collegeStHeight + "px");
		providenceHeight = $("#providenceHeader").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("providence: " + providenceHeight + "px");
		travelHeight = $("#travelHeader").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("travel: " + travelHeight + "px");
		lowerGreenHeight = $("#lowerGreenHeader").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("lowerGreen: " + lowerGreenHeight + "px");
		mainGreenHeight = $("#mainGreenHeader").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("mainGreen: " + mainGreenHeight + "px");
		saylesHeight = $("#saylesHeader").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("sayles: " + saylesHeight + "px");
		lincolnFieldHeight = $("#lincolnFieldHeader").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("lincolnField: " + lincolnFieldHeight + "px");
		waylandHeight = $("#waylandHeader").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("wayland: " + waylandHeight + "px");
		thayerHeight = $("#thayerHeader").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("thayer: " + thayerHeight + "px");
		soldiersArchHeight = $("#soldiersArchHeader").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("soldiersArch: " + soldiersArch + "px");
		metcalfHeight = $("#metcalfHeader").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("metcalfHeader: " + metcalfHeaderHeight + "px");
		watermanHeight = $("#watermanHeader").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("waterman: " + watermanHeight + "px");
		angellHeight = $("#angellHeader").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("angell: " + angellHeight + "px");
		afterHeight = $("#afterHeader").offset().top ;// This makes sure that it finds out the height of the banner when the page loads, so that on different size monitors it still switches at the right time.
		// console.log("after: " + afterHeight + "px");

		windowHeight = $(window).height();      					// Height of window (visible part).
		windowTop = $(window).scrollTop();
		docHeight = $(document).height();
		scrollVal =  windowTop;
		console.log('scrollVal = ' + scrollVal );
	};

	draw = function(){
		if (scrollVal <= logisticsHeight) {
			$("#introductionMenu").css("color","rgb(255,50,50)");
			$("#logisticsMenu").css("color","rgb(0,0,0)");
			$("#tipsMenu").css("color","rgb(0,0,0)");

			$( "#logisticsSubMenu" ).addClass("hide");
			$( "#contentSubMenu" ).addClass("hide");

		} else if (scrollVal <= contentHeight){
			$("#introductionMenu").css("color","rgb(0,0,0)");
			$("#logisticsMenu").css("color","rgb(255,50,50)");
			$("#contentMenu").css("color","rgb(0,0,0)");

			$( "#logisticsSubMenu" ).removeClass("hide");
			$( "#contentSubMenu" ).addClass("hide");


			if (scrollVal <= liabilityHeight){
				$("#dayOf").css("color","rgb(255,50,50)");
				$("#liability").css("color","rgb(0,0,0)");
				$("#substitutionPolicy").css("color","rgb(0,0,0)");
			} else if (scrollVal <= accessibilityHeight){
				$("#dayOf").css("color","rgb(0,0,0)");
				$("#liability").css("color","rgb(255,50,50)");
				$("#accessibility").css("color","rgb(0,0,0)");
			} else if (scrollVal <= mentorGuidesHeight) {
				$("#liability").css("color","rgb(0,0,0)");
				$("#accessibility").css("color","rgb(255,50,50)");
				$("#mentorGuides").css("color","rgb(0,0,0)");
			} else if (scrollVal <= substitutionPolicyHeight){
				$("#accessibility").css("color","rgb(0,0,0)");
				$("#mentorGuides").css("color","rgb(255,50,50)");
				$("#substitutionPolicy").css("color","rgb(0,0,0)");
			} else {
				$("#dayOf").css("color","rgb(0,0,0)");
				$("#mentorGuides").css("color","rgb(0,0,0)");
				$("#substitutionPolicy").css("color","rgb(255,50,50)");
			}


		} else if (scrollVal <= tipsHeight){
			$("#logisticsMenu").css("color","rgb(0,0,0)");
			$("#contentMenu").css("color","rgb(255,50,50)");
			$("#tipsMenu").css("color","rgb(0,0,0)");

			$( "#logisticsSubMenu" ).addClass("hide");
			$( "#contentSubMenu" ).removeClass("hide");

			if (scrollVal <= routeOverviewHeight){
				$("#basics").css("color","rgb(255,50,50)");
				$("#routeOverview").css("color","rgb(0,0,0)");
			} else if (scrollVal <= quietGreenHeight){
				$("#basics").css("color","rgb(0,0,0)");
				$("#routeOverview").css("color","rgb(255,50,50)");
				$("#quietGreen").css("color","rgb(0,0,0)");
			} else if (scrollVal <= johnHayHeight){
				$("#routeOverview").css("color","rgb(0,0,0)");
				$("#quietGreen").css("color","rgb(255,50,50)");
				$("#johnHay").css("color","rgb(0,0,0)");
			} else if (scrollVal <= rockHeight){
				$("#quietGreen").css("color","rgb(0,0,0)");
				$("#johnHay").css("color","rgb(255,50,50)");
				$("#rock").css("color","rgb(0,0,0)");
			} else if (scrollVal <= vanWinkleGatesHeight){
				$("#johnHay").css("color","rgb(0,0,0)");
				$("#rock").css("color","rgb(255,50,50)");
				$("#vanWinkleGates").css("color","rgb(0,0,0)");
			} else if (scrollVal <= collegeStHeight){
				$("#rock").css("color","rgb(0,0,0)");
				$("#vanWinkleGates").css("color","rgb(255,50,50)");
				$("#collegeSt").css("color","rgb(0,0,0)");
			} else if (scrollVal <= providenceHeight){
				$("#vanWinkleGates").css("color","rgb(0,0,0)");
				$("#collegeSt").css("color","rgb(255,50,50)");
				$("#providence").css("color","rgb(0,0,0)");
			} else if (scrollVal <= travelHeight){
				$("#collegeSt").css("color","rgb(0,0,0)");
				$("#providence").css("color","rgb(255,50,50)");
				$("#travel").css("color","rgb(0,0,0)");
			} else if (scrollVal <= lowerGreenHeight){
				$("#providence").css("color","rgb(0,0,0)");
				$("#travel").css("color","rgb(255,50,50)");
				$("#lowerGreen").css("color","rgb(0,0,0)");
			} else if (scrollVal <= mainGreenHeight){
				$("#travel").css("color","rgb(0,0,0)");
				$("#lowerGreen").css("color","rgb(255,50,50)");
				$("#mainGreen").css("color","rgb(0,0,0)");
			} else if (scrollVal <= saylesHeight){
				$("#lowerGreen").css("color","rgb(0,0,0)");
				$("#mainGreen").css("color","rgb(255,50,50)");
				$("#sayles").css("color","rgb(0,0,0)");
			} else if (scrollVal <= lincolnFieldHeight){
				$("#mainGreen").css("color","rgb(0,0,0)");
				$("#sayles").css("color","rgb(255,50,50)");
				$("#lincolnField").css("color","rgb(0,0,0)");
			} else if (scrollVal <= waylandHeight){
				$("#sayles").css("color","rgb(0,0,0)");
				$("#lincolnField").css("color","rgb(255,50,50)");
				$("#wayland").css("color","rgb(0,0,0)");
			} else if (scrollVal <= thayerHeight){
				$("#lincolnField").css("color","rgb(0,0,0)");
				$("#wayland").css("color","rgb(255,50,50)");
				$("#thayer").css("color","rgb(0,0,0)");
			} else if (scrollVal <= soldiersArchHeight){
				$("#wayland").css("color","rgb(0,0,0)");
				$("#thayer").css("color","rgb(255,50,50)");
				$("#soldiersArch").css("color","rgb(0,0,0)");
			} else if (scrollVal <= metcalfHeight){
				$("#thayer").css("color","rgb(0,0,0)");
				$("#soldiersArch").css("color","rgb(255,50,50)");
				$("#metcalf").css("color","rgb(0,0,0)");
			} else if (scrollVal <= watermanHeight){
				$("#soldiersArch").css("color","rgb(0,0,0)");
				$("#metcalf").css("color","rgb(255,50,50)");
				$("#waterman").css("color","rgb(0,0,0)");
			} else if (scrollVal <= angellHeight){
				$("#metcalf").css("color","rgb(0,0,0)");
				$("#waterman").css("color","rgb(255,50,50)");
				$("#angell").css("color","rgb(0,0,0)");
			} else if (scrollVal <= afterHeight){
				$("#waterman").css("color","rgb(0,0,0)");
				$("#angell").css("color","rgb(255,50,50)");
				$("#after").css("color","rgb(0,0,0)");
			} else{
				$("#angell").css("color","rgb(0,0,0)");
				$("#after").css("color","rgb(255,50,50)");
			}

		} else {
			$("#introductionMenu").css("color","rgb(0,0,0)");
			$("#contentMenu").css("color","rgb(0,0,0)");
			$("#tipsMenu").css("color","rgb(255,50,50)");

			$( "#logisticsSubMenu" ).addClass("hide");
			$( "#contentSubMenu" ).addClass("hide");
		}		
	};

	readHeight();
	draw();

	$("ul.content").addClass('seeLessContent');


	$(document).scroll(function(){
		readHeight();
		draw();
	});

	$(".see").click(function() {
		$(this).prev().toggleClass("seeMoreContent seeLessContent");
		if ($(this).text() == "see less"){
			$(this).text("see more");
		} else {
			$(this).text("see less");
		}
	});


// Click event for any anchor tag that's href starts with #
 $('a[href^="#"]').click(function(event) {

    // The id of the section we want to go to.
    var id = $(this).attr("href");

    // An offset to push the content down from the top.
    var offset = -10;

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