function dollarAmountSeparator(amount) {
	return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function fetchCandidateInfoLegend(fieldsBeingFetched) {

	console.log("working")

	$(".candidateInfoDetails").empty()

	if (fieldsBeingFetched === "experience") {
		$(".candidateInfoDetails").append(
			`
			<div class="candidateProfessionalExperience">
				<div class="candidateHeader">Professional Experience</div>
				<div class="candidateElementTitle">New York University Langone Medical Center</div>
				<div class="candidateElementDesc">
					Freelance clinical work made easy. Seamlessly communicate and contract with facilities. Freelance clinical work made easy. Seamlessly communicate and contract with facilities. Freelance clinical work made easy. Seamlessly communicate and contract with facilities.
				</div>
				<div class="candidateElementTitle">Mt. Sinai Medical Center</div>
				<div class="candidateElementDesc">
					Freelance clinical work made easy. Seamlessly communicate and contract with facilities. Freelance clinical work made easy. Seamlessly communicate and contract with facilities. Freelance clinical work made easy. Seamlessly communicate and contract with facilities.
				</div>
				<div class="candidateElementTitle">Beth Israel Medical Center</div>
				<div class="candidateElementDesc">
					Freelance clinical work made easy. Seamlessly communicate and contract with facilities. Freelance clinical work made easy. Seamlessly communicate and contract with facilities. Freelance clinical work made easy. Seamlessly communicate and contract with facilities.
				</div>
			</div>
			`
		)
	}

	if (fieldsBeingFetched === "requirements") {
		$(".candidateInfoDetails").append(
			`
			<div class="requirements">
				<div class="container">

				</div>
				<div class="container">
					<div class="requirementsFloatLeft requirmentsCurrentLocation">
						Current Location: New York, NY
					</div>
					<div class="requirementsFloatLeft requirmentsTraveling">
						Traveling: <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
					</div>
				</div>
				<div class="container">
					<div class="requirementsFloatLeft requirmentsFullTime">
						Full-time: <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
					</div>
					<div class="requirementsFloatLeft requirmentsPartTime">
						Part-time: <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
					</div>
					<div class="requirementsFloatLeft requirmentsOverTime">
						Overtime: <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
					</div>
					<div class="requirementsFloatLeft requirmentsOpenToCall">
						Open To Call: <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
					</div>
				</div>
				<div class="container">
					<div class="requirementsFloatLeft requirmentsHoursExpectations">
					</div>
					<div class="requirementsFloatLeft requirmentsWageExpectations">
					</div>
				</div>
				<div class="container">
					<div class="requirementsFloatLeft requirmentsSpecsExpectations">
					</div>
					<div class="requirementsFloatLeft requirmentsCaseloadExpectations">
					</div>
				</div>
			</div>
			`
		)		
	}

	if (fieldsBeingFetched === "reviews") {
		$(".candidateInfoDetails").append(
			`
			<div class="requirements">
				<div class="container">
					Review 1
				</div>
				<div class="container">
					Review 2
				</div>
				<div class="container">
					Review 3
				</div>
				<div class="container">
					Review 4
				</div>
			</div>
			`
		)		
	}

	if (fieldsBeingFetched === "interview") {
		$(".candidateInfoDetails").append(
			`
			<div class="requirements">
				<div class="container">
					Contact for Specific Questions
				</div>
				<div class="container">
					Schedule Interview
				</div>
				<div class="container">
					Negotiate the Price for Long Term
				</div>
			</div>
			`
		)		
	}

}

function loadCandidateDetails(indexNumber) {
	// var myWindow = window.open("", "MsgWindow", "width=200,height=100");
	// myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");

	var thisVarNameNeedsToBeChangeDynamically = window.open("12312", "_blank", "", "");
	thisVarNameNeedsToBeChangeDynamically.document.write(
		`
		<!DOCTYPE html>
		<html>

			<head>

				<script src="marketSupply.js"></script>
				<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

				<style>

					body {
					    font-family: proxima-nova, sans-serif !important;
					    -webkit-font-smoothing: antialiased !important;
					    font-weight: 200;
					    font-size: 15px;
					}

					.requirementsFloatLeft {
						float: left;
					}

					.candidateCover {
						width: 90vw;
					    overflow: auto;
					    border-style: solid;
					    border-color: #aad4e2;
					    border-width: 1px;
					    margin: 5vw;
					}

					.candidateInfoLeft {
						width: 38vw;
					    height: 500px;
					    margin: 2.5vw;
					    padding: 0;
					    border-right-style: solid;
					    border-right-color: #aad4e2;
					    border-right-width: 1px;
					    float: left;
					}

					.candidateInfoRight {
						width: 45vw;
					    height: 500px;
					    margin: 2.5vw 0 0 0;
					    padding: 0;
					    float: left;
					}

					.candidateSynopsisImg {
						float: left;
					    width: 150px;
					    height: 150px;
					    border-radius: 100%;
					    overflow: hidden;
					    object-fit: cover;
					}

					.candidateSynopsisRight {
					    float: left;
    					margin-left: 2vw;
					}

					.candidateSynopsisNameTitle {
						font-size: 25px;
					    font-weight: 200;
					    line-height: 2;
					    padding-top: 10px
					}

					.candidateSynopsisFirstSet {
						font-size: 15px;
					    font-weight: 200;
					    line-height: 1.5;				
					}

					.candidateResume {
						width: 38vw;
						overflow: auto;
						margin-top: 3vh;
					}

					.candidateSynopsis {
						width: 38vw;
						overflow: auto;
					}

					.candidateInfoLegend {
						width: 45vw;
					    overflow: auto;
					}

					.candidateInfoDetails {
						width: 42.8vw;
					    overflow: auto;
					    margin-left: 0.8vw;
					    margin-top: 1vw;
					}

					.candidateInfoLegendElement {
						width: 120px;
					    margin-left: 10px;
					    overflow: auto;
					    float: left;
					    text-align: center;
					    font-weight: 400;
					    border-style: solid;
					    border-width: 1px;
					    border-bottom-style: none;
					    padding: 7px;
					   	border-color: #AAD4E2;
					}

					.candidateHeader {
					    font-weight: 400;
					}

					.candidateElementTitle {
						margin-top: 15px;
    					font-weight: 400;
					}

					.candidateElementDesc {
						margin-top: 10px;
    					line-height: 1.5;
					}

					.requirementsFloatLeft {
						float: left;
					}

					.synopsisGlyphicon {
						margin-right: 10px;
					}

				</style>

			</head>

			<body>
				<div class="candidateCover">
					
					<div class="candidateInfoLeft">
						<div class="candidateSynopsis">
							<img class="candidateSynopsisImg" src="https://cdn.healthcitycaymanislands.com/gallery/misc/dynamic/so-img-alt.png-nggid03254-ngg0dyn-0x0x100-00f0w010c010r110f110r010t010.png">
							<div class="candidateSynopsisRight">
								<div class="candidateSynopsisFirstSet">
									<div class="candidateSynopsisNameTitle">Camilla Bruni MD</div>
									<div class="candidateSynopsisSpecialty"><span class="synopsisGlyphicon glyphicon glyphicon-education" aria-hidden="true"></span>Urology Specialist</div>
									<div class="candidateSynopsisLocation"><span class="synopsisGlyphicon glyphicon glyphicon-map-marker" aria-hidden="true"></span>Bethesda, MD</div>
									<div class="candidateSynopsisExperience"><span class="synopsisGlyphicon glyphicon glyphicon-briefcase" aria-hidden="true"></span>3+ years experience</div>
									<div class="candidateSynopsisLanguage"><span class="synopsisGlyphicon glyphicon glyphicon-globe" aria-hidden="true"></span>English, French, Spanish</div>
								</div>
							</div>
						</div>

						<div class="candidateResume">
							<div class="candidateSpecialtyList">
								Specialty
								<ul>Urology General Consultations</ul>
								<ul>Expertise in Senior Urology Care</ul>
								<ul>Expertise in Urologic Pain Management</ul>
							</div>
							<div class="candidateAcademicBackground">
								Residency
								<ul>New York University Langone Medical Center</ul>
								<ul>Pfizer Labatories</ul>
								Education
								<ul>Johns Hopkins University Schools of Medicine <i>MD</i></ul>
								<ul>University of North Carolina, Chapel Hill <i>BSc</i></ul>
							</div>
						</div>
					</div>

					<div class="candidateInfoRight">
						<div class="candidateInfoLegend">
							<a class="candidateInfoLegendElement" onclick="fetchCandidateInfoLegend('experience')">Experience</a>
							<a class="candidateInfoLegendElement" onclick="fetchCandidateInfoLegend('requirements')">Requirements</a>
							<a class="candidateInfoLegendElement" onclick="fetchCandidateInfoLegend('reviews')">Reviews</a>
							<a class="candidateInfoLegendElement" onclick="fetchCandidateInfoLegend('interview')">Interview</a>
						</div>

						<div class="candidateInfoDetails">
							<div class="candidateProfessionalExperience">
								<div class="candidateHeader">Professional Experience</div>
								<div class="candidateElementTitle">New York University Langone Medical Center</div>
								<div class="candidateElementDesc">
									Freelance clinical work made easy. Seamlessly communicate and contract with facilities. Freelance clinical work made easy. Seamlessly communicate and contract with facilities. Freelance clinical work made easy. Seamlessly communicate and contract with facilities.
								</div>
								<div class="candidateElementTitle">Mt. Sinai Medical Center</div>
								<div class="candidateElementDesc">
									Freelance clinical work made easy. Seamlessly communicate and contract with facilities. Freelance clinical work made easy. Seamlessly communicate and contract with facilities. Freelance clinical work made easy. Seamlessly communicate and contract with facilities.
								</div>
								<div class="candidateElementTitle">Beth Israel Medical Center</div>
								<div class="candidateElementDesc">
									Freelance clinical work made easy. Seamlessly communicate and contract with facilities. Freelance clinical work made easy. Seamlessly communicate and contract with facilities. Freelance clinical work made easy. Seamlessly communicate and contract with facilities.
								</div>
							</div>
						</div>
					</div>
				</div>
			</body>

		</html>
		`
	);
    // redirectWindow.location;

}

function loadClinicianPost(product) {
	
	$(".marketplaceContentsCover").empty()

	for (clinicianIndex in clinicianInventory) { if (clinicianInventory[clinicianIndex]["product"] === product)

		$(".marketplaceContentsCover").append(
			`
			<div class="marketSupplyPost" onclick="loadCandidateDetails(${clinicianIndex})">

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