function removeSpaceForClassName (array) {
	return array.replace(/\s+/g, '');
}

function goToMarketPlace() {
	console.log("goToMarketPlace is rendered")
	$(".frontPage").hide()
	$(".marketplace").show()
}

function loadDropdowns() {
	for (arrayIndex in bizSpecialty) {
		$(".searchDropdownSpecialty").append(
			`
			<li class="dropdown${removeSpaceForClassName(bizSpecialty[arrayIndex])}"><a href="#">${bizSpecialty[arrayIndex]}</a></li>
			`
		)
	}

	for (arrayIndex in bizLocation) {
		$(".searchDropdownLocation").append(
			`
			<li class="dropdown${removeSpaceForClassName(bizLocation[arrayIndex])}"><a href="#">${bizLocation[arrayIndex]}</a></li>
			`
		)
	}

	$(".searchBoxSearchTab").append(
		`
		<input placeholder="Enter Keywords"></input>
		`
	)	

	for (arrayIndex in bizDuration) {
		$(".searchDropdownDuration").append(
			`
			<li class="dropdown${removeSpaceForClassName(bizDuration[arrayIndex])}"><a href="#">${bizDuration[arrayIndex]}</a></li>
			`
		)
	}
}