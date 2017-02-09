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
						<div class="fullTimeIcon${clinicianIndex}"></div>
						<span class="partTimeIcon${clinicianIndex} glyphicon glyphicon-adjust" aria-hidden="true"></span>
						<span class="overTimeIcon${clinicianIndex}  glyphicon glyphicon-time" aria-hidden="true"></span>
						<span class="nightShiftIcon${clinicianIndex} glyphicon glyphicon-lamp" aria-hidden="true"></span>
						<span class="onCallIcon${clinicianIndex} glyphicon glyphicon-phone-alt" aria-hidden="true"></span>
						<span class="travellingOkIcon${clinicianIndex} glyphicon glyphicon-plane" aria-hidden="true"></span>
					</div>
					<div class="iconLegend${clinicianIndex}"></div>
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
						<div class="clinicianRatesReplaceOnHover">
							<div class="clinicianRates">$${clinicianInventory[clinicianIndex]["wageExpectation"]} per Hour</div>
							<div class="clinicianSavings">
								<div class="clinicianSavingsBeforeHover">
									<div class="clinicianSavingFigures">Saving<br>$960 per Pay Check</div>
									<div class="clinicianSavingHow">How?</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`
		)

		$(`.fullTimeIcon${clinicianIndex}`).hover(
			function() {
				$(`.iconLegend${clinicianIndex}`).text("Looking for full time")
			}, function() {
				$(`.iconLegend${clinicianIndex}`).empty()
			}
		)

		$(".partTimeIcon").hover(
			function() {
				$(".iconLegend").text("Looking for part time")
			}, function() {
				$(".iconLegend").empty()
			}
		)

		$(".overTimeIcon").hover(
			function() {
				$(".iconLegend").text("Overtime is OK")
			}, function() {
				$(".iconLegend").empty()
			}
		)

		$(".nightShiftIcon").hover(
			function() {
				$(".iconLegend").text("I am willing to do nightshift")
			}, function() {
				$(".iconLegend").empty()
			}
		)

		$(".onCallIcon").hover(
			function() {
				$(".iconLegend").text("On call is fine by me")
			}, function() {
				$(".iconLegend").empty()
			}
		)

		$(".travellingOkIcon").hover(
			function() {
				$(".iconLegend").text("Traveling is good")
			}, function() {
				$(".iconLegend").empty()
			}
		)


		$(".clinicianRatesReplaceOnHover").hover(
			function() {
				$(".clinicianRates").replaceWith(
					`
					<div class="clinicianSavingsBreakdown">
						Staffing Agencies</br>
						($80/hr x 1.7) x 80hrs</br>$5,440
					</div>
					`
				)
				$(".clinicianSavings").replaceWith(
					`
					<div class="clinicianSavingsBreakdownCover">
						<div class="clinicianSavingsBreakdown">
							Locum Health</br>
							($80/hr x 1.4) x 80hrs</br>$4,480
						</div>
						<div class="totalClinicSavings">
							Savings</br>$960 per Paycheck 
						</div>
					</div>
					`
				)
			}, function() {
				$(".clinicianSavingsBreakdown").replaceWith(
					`<div class="clinicianRates">$80 per Hour</div>`
				)
				$(".clinicianSavingsBreakdownCover").replaceWith(
					`
					<div class="clinicianSavings">
						<div class="clinicianSavingsBeforeHover">
							<div class="clinicianSavingFigures">Saving<br>$960 per Pay Check</div>
							<div class="clinicianSavingHow">How?</div>
						</div>
					</div>
					`
				)
			}
		)

	}

}

function fetchSupplyTradingFloor(product) {
	loadClinicianPost(product)
	goToSupplyMarketPlace()
}

$(document).ready(function() { 

	// event.preventDefault()

})