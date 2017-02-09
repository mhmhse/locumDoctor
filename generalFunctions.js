function unHighlightHowItWorks() {
	$(".howItWorksButton").css("color", "white");
	$(".howItWorksButton").css("background-color", "#00A7F2");
}

function highlightOrchardButton() {
	$(".orchardButton").css("background-color", "white");
	$(".orchardButton").css("color", "#00A7F2");
}

function goToSearchSection() {
	$(".marketplace").hide();
	$(".navbarOptionCoverCenter").hide();
	$(".frontPage").show();
	$(".searchFields").show();
	$(".dashboards").show();
	lookingForJobs();
	highlightOrchardButton();
	unHighlightHowItWorks();

	setTimeout(function(){
		$(".frontPageButtonWrapperLeft").focus();
	}, 500)

}

function lookingForJobs() {
	$(".supplyBoard").hide();
	$(".demandBoard").show();

	//I am quickly adding this function in order to prevent duplicated check boxes. First it empties out any check box glyphicon that may exist there or not, and then add on the next line.

	$(".clinicianCheckbox").empty()	

	$(".clinicianCheckbox").append(
		`
		<span class=" glyphicon glyphicon glyphicon-ok" aria-hidden="true"></span>
		`
	)

	//if the clinician box has ben checked, then the clinic box should be marked off. Simple.

	$(".clinicCheckbox").empty()

}

function lookingForPeople() {
	$(".demandBoard").hide();

	//same idea but different direction compared to the codes above

	$(".supplyBoard").show();

	$(".clinicCheckbox").empty()

	$(".clinicCheckbox").append(
		`
		<span class=" glyphicon glyphicon glyphicon-ok" aria-hidden="true"></span>
		`
	)

	$(".clinicianCheckbox").empty()
}

function removeSpaceForClassName (array) {
	return array.replace(/\s+/g, '');
}

function goToDemandMarketPlace() {
	$(".frontPage").hide()
	$(".marketSupplyPost").hide()
	$(".marketDemandPost").show()
	$(".marketplace").show()
	$(".navbarOptionCoverCenter").show()
}

function goToSupplyMarketPlace() {
	$(".frontPage").hide()
	$(".marketDemandPost").hide()
	$(".marketSupplyPost").show()
	$(".marketplace").show()	
	$(".navbarOptionCoverCenter").show()
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