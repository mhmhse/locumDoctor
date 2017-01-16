function lookingForJobs() {
	$(".supplyBoard").hide();
	$(".demandBoard").show()

}

function lookingForPeople() {
	$(".demandBoard").hide()
	$(".supplyBoard").show();
	
}

function removeSpaceForClassName (array) {
	return array.replace(/\s+/g, '');
}

function goToDemandMarketPlace() {
	$(".frontPage").hide()
	$(".marketSupplyPost").hide()
	$(".marketDemandPost").show()
	$(".marketplace").show()
}

function goToSupplyMarketPlace() {
	$(".frontPage").hide()
	$(".marketDemandPost").hide()
	$(".marketSupplyPost").show()
	$(".marketplace").show()	
}

function loadDropdowns() {
	for (arrayIndex in supplyProducts) {
		$(".searchDropdownSpecialty").append(
			`
			<li class="dropdown${removeSpaceForClassName(supplyProducts[arrayIndex])}"><a href="#">${supplyProducts[arrayIndex]}</a></li>
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