function hideFrontPageBeforeLoadingScreen() {
	$(".navbar").hide()
	$(".frontPage").hide()
	$(".footer").hide()
}

function showFrontPageAfterLoadingScreen() {
	$(".navbar").show()
	$(".frontPage").show()
	$(".footer").show()
}

function makeLoadingScreenDisappear() {
	$(".loadingPageCover").hide()
}


$(document).ready(function(){ 
	
	hideFrontPageBeforeLoadingScreen()

	setTimeout(function(){
		makeLoadingScreenDisappear()
		showFrontPageAfterLoadingScreen()
	}, 3000)
})




