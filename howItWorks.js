$(window).scroll(function (event) {

    var didItScroll = false

    if (didItScroll == false) {
    	didItScroll = true;

    	$(".frontPage").css("background-color", "white")
    	$(".frontPage").css("color", "#00A7F2")

    	$(".selectionCheckBox").css("border-color", "#00A7F2")
    	$(".selectionCheckBox").css("color", "#00A7F2")

    	console.log("working")
    }

});