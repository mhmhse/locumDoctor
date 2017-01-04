function removeSpaceForClassName (array) {
	return array.replace(/\s+/g, '');
}

function goToMarketPlace() {
	console.log("goToMarketPlace is rendered")
	$(".frontPage").hide()
	$(".marketplace").show()
}

