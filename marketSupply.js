function dollarAmountSeparator(amount) {
	return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function loadClinicianPost(product) {
	
	$(".marketplaceContentsCover").empty()

	for (clinicianIndex in clinicianInventory) { if (clinicianInventory[clinicianIndex]["product"] === product)

		$(".marketplaceContentsCover").append(
			`
			<div class="marketSupplyPost">

				<div class="clinicianPostFirstRow">
					<div class="clinicianProfilePhoto">
						<div clas="clinicianInitialCover">
							<p class="clinicianInitial">
								${clinicianInventory[clinicianIndex]["firstName"][0]}${clinicianInventory[clinicianIndex]["lastName"][0]}
							</p>
						</div>
					</div>
					<div class="clinicianProfileInfo">
						<p class="clinicianNameTitle noMargin">${clinicianInventory[clinicianIndex]["firstName"]} ${clinicianInventory[clinicianIndex]["lastName"]} ${clinicianInventory[clinicianIndex]["title"]}</p>
						<p class="clinicianSpecialty noMargin">${clinicianInventory[clinicianIndex]["specialty"]}</p>
						<p class="clinicianLocation noMargin">${clinicianInventory[clinicianIndex]["location"]}</p>
						<p class="clinicanExperience noMargin">${clinicianInventory[clinicianIndex]["experience"]} years experience</p>
					</div>
				</div>

				<div class="clinicianPostSecondRow">
					<div class="clinicianPostSecondRowInnerCover">
						<div onmouseover="showIconDescription('fullTime', ${clinicianIndex})" class="fullTimeIcon fullTimeIcon${clinicianIndex}"></div>
						<span onmouseover="showIconDescription('partTime', ${clinicianIndex})" class="partTimeIcon partTimeIcon${clinicianIndex} glyphicon glyphicon-adjust" aria-hidden="true"></span>
						<span onmouseover="showIconDescription('overTime', ${clinicianIndex})" class="overTimeIcon overTimeIcon${clinicianIndex}  glyphicon glyphicon-time" aria-hidden="true"></span>
						<span onmouseover="showIconDescription('nightShift', ${clinicianIndex})" class="nightShiftIcon nightShiftIcon${clinicianIndex} glyphicon glyphicon-lamp" aria-hidden="true"></span>
						<span onmouseover="showIconDescription('onCall', ${clinicianIndex})" class="onCallIcon onCallIcon${clinicianIndex} glyphicon glyphicon-phone-alt" aria-hidden="true"></span>
						<span onmouseover="showIconDescription('travelling', ${clinicianIndex})" class="travellingOkIcon travellingOkIcon${clinicianIndex} glyphicon glyphicon-plane" aria-hidden="true"></span>
					</div>
					<div class="iconLegend iconLegend${clinicianIndex}"></div>
				</div>

				<div class="clinicianPostThirdRow">
					<div class="clinicianCredentials">
						<div class="education">
							<p class="clinicianHeader">Education and Training</p>
							<p class="clinicianSubheader">${clinicianInventory[clinicianIndex]["schoolName"]} '${clinicianInventory[clinicianIndex]["schoolClass"]}</p>
							<p class="clinicianSubheaderDesc">${clinicianInventory[clinicianIndex]["schoolType"]}</p>
							<p class="clinicianSubheader">${clinicianInventory[clinicianIndex]["residenceName"]}</p>
							<p class="clinicianSubheaderDesc">${clinicianInventory[clinicianIndex]["residenceType"]}</p>
						</div>
						<div class="hopsitalAffilication">
							<p class="clinicianHeader">Hospital Affiliation</p>
							<p class="clinicianSubheader">${clinicianInventory[clinicianIndex]["hospitalAffiliation"][0]}</p>
							<p class="clinicianSubheader">${clinicianInventory[clinicianIndex]["hospitalAffiliation"][1]}</p>
						</div>
					</div>

					<div class="clinicianPreference">
						<div class="clinicianAvailability">
							<div class="clinicianHoursPerWeek">${clinicianInventory[clinicianIndex]["weeklyHours"]} Hours/Week</div>
						</div>
						<div onmouseover="hoverClinicianRatesSavings('${clinicianIndex}', ${clinicianInventory[clinicianIndex]["wageExpectation"]})" class="clinicianRatesReplaceOnHover">
							<div class="clinicianRates${clinicianIndex}">$${dollarAmountSeparator(clinicianInventory[clinicianIndex]["wageExpectation"])} per Hour</div>
							<div class="clinicianSavings${clinicianIndex}">
								<div class="clinicianSavingsBeforeHover">
									<div class="clinicianSavingFigures${clinicianIndex}">Saving<br>$${dollarAmountSeparator(clinicianInventory[clinicianIndex]["wageExpectation"]*80*0.3)} per Pay Check</div>
									<div class="clinicianSavingHow">How?</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		)

		// $(".clinicianRatesReplaceOnHover").hover(
		// 	function() {
		// 		$(".clinicianRates").replaceWith(
		// 			`
		// 			<div class="clinicianSavingsBreakdown">
		// 				Staffing Agencies</br>
		// 				($80/hr x 1.7) x 80hrs</br>$5,440
		// 			</div>
		// 			`
		// 		)
		// 		$(".clinicianSavings").replaceWith(
		// 			`
		// 			<div class="clinicianSavingsBreakdownCover">
		// 				<div class="clinicianSavingsBreakdown">
		// 					Locum Health</br>
		// 					($80/hr x 1.4) x 80hrs</br>$4,480
		// 				</div>
		// 				<div class="totalClinicSavings">
		// 					Savings</br>$960 per Paycheck 
		// 				</div>
		// 			</div>
		// 			`
		// 		)
		// 	}, function() {
		// 		$(".clinicianSavingsBreakdown").replaceWith(
		// 			`<div class="clinicianRates">$80 per Hour</div>`
		// 		)
		// 		$(".clinicianSavingsBreakdownCover").replaceWith(
		// 			`
		// 			<div class="clinicianSavings">
		// 				<div class="clinicianSavingsBeforeHover">
		// 					<div class="clinicianSavingFigures">Saving<br>$960 per Pay Check</div>
		// 					<div class="clinicianSavingHow">How?</div>
		// 				</div>
		// 			</div>
		// 			`
		// 		)
		// 	}
		// )

	}

}

function hoverClinicianRatesSavings(indexNumber, perHourAmount) {

	$(`.clinicianRates${indexNumber}`).replaceWith(
		`
		<div class="clinicianSavingsBreakdown">
			Staffing Agencies</br>
			($${dollarAmountSeparator(perHourAmount)}/hr x 1.7) x 80hrs</br>$${dollarAmountSeparator(perHourAmount*1.7*80)}
		</div>
		`
	)

	$(`.clinicianSavings${indexNumber}`).replaceWith(
		`
		<div class="clinicianSavingsBreakdownCover">
			<div class="clinicianSavingsBreakdown">
				Orchard Health</br>
				($${dollarAmountSeparator(perHourAmount)} x 1.4) x 80hrs</br>$${dollarAmountSeparator(perHourAmount*1.4*80)}
			</div>
			<div class="totalClinicSavings">
				<b>Savings</b></br><u>$${dollarAmountSeparator(perHourAmount*1.7*80 - perHourAmount*1.4*80)}</u> per Paycheck
			</div>
		</div>
		`
	)
}

function showIconDescription(iconType, divIndex) {
	
	if (iconType = "fullTime") {
		$(`.fullTimeIcon${divIndex}`).hover(
			function() {
				$(`.iconLegend${divIndex}`).text("Full Time")
			}, function() {
				$(`.iconLegend${divIndex}`).empty()
			}
		)
	}

	if (iconType = "partTime") {
		$(`.partTimeIcon${divIndex}`).hover(
			function() {
				$(`.iconLegend${divIndex}`).text("Part Time")
			}, function() {
				$(`.iconLegend${divIndex}`).empty()
			}
		)
	}

	if (iconType = "overTime") {
		$(`.overTimeIcon${divIndex}`).hover(
			function() {
				$(`.iconLegend${divIndex}`).text("Overtime is OK")
			}, function() {
				$(`.iconLegend${divIndex}`).empty()
			}
		)
	}

	if (iconType = "nightshift") {
		$(`.nightShiftIcon${divIndex}`).hover(
			function() {
				$(`.iconLegend${divIndex}`).text("Open to nightshift")
			}, function() {
				$(`.iconLegend${divIndex}`).empty()
			}
		)
	}

	if (iconType = "onCall") {
		$(`.onCallIcon${divIndex}`).hover(
			function() {
				$(`.iconLegend${divIndex}`).text("Willing to be oncall")
			}, function() {
				$(`.iconLegend${divIndex}`).empty()
			}
		)
	}

	if (iconType = "travelling") {
		$(`.travellingOkIcon${divIndex}`).hover(
			function() {
				$(`.iconLegend${divIndex}`).text("Happy to Travel")
			}, function() {
				$(`.iconLegend${divIndex}`).empty()
			}
		)
	}

}

function fetchSupplyTradingFloor(product) {
	loadClinicianPost(product)
	goToSupplyMarketPlace()
}