$(document).ready(function(){

	event.preventDefault()
	
	for (arrayIndex in supplyProducts) {

		$(".supplyBoard").append(
		`		
		<div class="rowBox search${removeSpaceForClassName(supplyProducts[arrayIndex])}" onclick="fetchSupplyTradingFloor('${removeSpaceForClassName(supplyProducts[arrayIndex])}')">
			<p>${supplyProducts[arrayIndex]}</p>
		</div>
		
		`
		)
	}

	for (arrayIndex in demandProducts) {

		$(".demandBoard").append(
		`		
		<div class="rowBox search${removeSpaceForClassName(demandProducts[arrayIndex])}" onclick="fetchJobTradingFloor('${removeSpaceForClassName(demandProducts[arrayIndex])}')">
			<p>${demandProducts[arrayIndex]}</p>
		</div>
		`
		)
	}

})

function loadJobDetail(jobIndex) {
	// var myWindow = window.open("", "MsgWindow", "width=200,height=100");
	// myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");

	var thisVarNameNeedsToBeChangeDynamically = window.open("12312", "_blank", "", "");
	thisVarNameNeedsToBeChangeDynamically.document.write(
		`
		<!DOCTYPE html>
		<html>
			<head>
				<style>	

					body {
						font-family: proxima-nova, sans-serif;
					}

					.jobPostDetailBoxContainer {
						width: 1200px;
						overflow: auto;
						margin: 30px auto 30px auto;
						border-style: solid;
						border-width: 1px;
						border-color: #aad4e2;
					}

					.jobPostPhotos {
						width: 100%;
						height: 400px;
						overflow: hidden;
					}

					.jobPostPhoto {
						width: 100%;
						height: 600px;
						float: left;
					}

					.jobPostNavBarOutput {
						border-right-style: solid;
						border-right-color: #aad4e2;
						border-right-width: 1px;
					}

					.jobPostDetailsBox1 {
						float: left;
						width: 700px;
						height: 600px;
						padding: 50px;
					}

					.jobPostDetailsBox2 {
						float: left;
						width: 360px;
						height: 600px;
						padding: 20px;
					}

					.jobPostDetailsBox2 iframe {
						width: 360px;
						height: 240px;
					}

					.jobPostDetailsBox2 img {
						width: 360px;
						height: 240px;
						margin-top: 10px;
					}

					.jobPostNavBar {
						width: 560px;
						overflow: auto;
						margin: 0 auto 30px auto;
					}

					.jobPostNavBar a {
						width: 100px;
						overflow: auto;
						margin: 20px;
						text-align: center;
					}

					.township {
						font-size: 20px;
					}

					.townshipDescription {
						margin-top: 10px;
					}

					.townshipActivities {
						margin-top: 10px;
					}

					.field1 {
						width: 560px;
						overflow: auto;
						margin: 0 auto 0 auto;
					}

					.townshipPhoto {
						width: 20%;
						overflow: auto;
						float: left;
						margin-left: 50px;
					}

					.townshipColumn2 {
						width: 65%;
						overflow: auto;
						float: left;
						margin: 10px 0 0 4%;
					}

					.field2 {
						text-align: center;
						margin: 10px;
					}

					.field3 {
						width: 560px;
						overflow: auto;
						margin: 30px 60px 0 60px;
						line-height: 2;
					}

					.neighborhoodPhoto {
						width: 100px;
						height: 100px;
						border-radius: 100%;
					}

				</style>
			</head>
			<body>

				 <div class="jobPostDetailBoxContainer">
				 	<div class="jobPostPhotos">
				 		<img src="mayo2.jpg" class="jobPostPhoto">
				 	</div>

					<div class="jobPostDetailsBox1">
						<div class="jobPostNavBar">
							<a class="jobPostNav">Neighborhood</a>
							<a class="jobPostNav">Clinic</a>
							<a class="jobPostNav">Qualifications</a>
							<a class="jobPostNav">Payments</a>
						</div>
						<div class="jobPostNavBarOutput">
							<div class="field1">
								<div class="townshipPhoto">
									<img src="millbrook.jpg" class="neighborhoodPhoto">
								</div>
								<div class="townshipColumn2">
									<div class="township">
										Millbrook, New York
									</div>
									<div class="townshipDescription">
										1.5h Drive from New York City
									</div>
									<div class="townshipActivities">
										Rural | Farms | Golf | Hiking 
									</div>
								</div>
							</div>

							<div class="field3">
								Millbrook is a village in Dutchess County, New York, United States. Millbrook is located in the Hudson Valley, on the east side of the Hudson River, 90 miles (140 km) north of New York City. Millbrook is near the center of the Town of Washington. As of the 2010 Census, Millbrook's population was 1,452. It is often referred to as a low-key version of the Hamptons and is one of the most affluent towns in New York State.

								Millbrook is part of the Poughkeepsie–Newburgh–Middletown Metropolitan Statistical Area as well as the larger New York–Newark–Bridgeport Combined Statistical Area.
							</div>
						</div>
					</div>

					<div class="jobPostDetailsBox2">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11899.649301354308!2d-73.70620570838632!3d41.78710311712066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd6f205bd7234d%3A0x98794cc566e8984a!2sMillbrook%2C+NY+12545!5e0!3m2!1sen!2sus!4v1485031501141" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
						<img src="millbrook.jpg">
					</div>				
				</div>

			</body>
		</html>
		`
	);

    // redirectWindow.location;

}

function loadJobPost(product) {

	$(".marketplaceContentsCover").empty()

	for (jobIndex in jobInventory) { if (jobInventory[jobIndex]["product"] === product) {
		console.log(jobInventory[jobIndex])

		$(".marketplaceContentsCover").append(
			`
			<div class="marketDemandPost" onclick="loadJobDetail('${jobIndex}')">

				<div class="marketSupplyPostFirstRow">
					<div class="marketSupplyDateLeft">
						${jobInventory[jobIndex]["startDate"]}
					</div>
					<div class="marketSupplyDateRight">
						${jobInventory[jobIndex]["endDate"]}
					</div>
				</div>

				<div class="marketSupplyPostSecondRow">
					<div class="marketSupplyPhotoLeft">
					</div>
					<div class="marketSupplyPhotoRight">
					</div>
				</div>			

				<div class="marketSupplyPostThirdRow">
					<div class="marketSupplyInfoLeft">
						<div class="marketSupplyInfoSpecialty">
							${jobInventory[jobIndex]["product"]}
						</div>
						<div class="marketSupplyInfoInstitutionName">
							${jobInventory[jobIndex]["clientName"]}
						</div>
						<div class="marketSupplyInfoTravelLocation">
							${jobInventory[jobIndex]["locationCounty"]}, ${jobInventory[jobIndex]["locationState"]}
						</div>
						<div class="marketSupplyInfoTravelPolicy">
						Lodging & Per Diem $${Number(jobInventory[jobIndex]["perDiem"]) + Number(jobInventory[jobIndex]["hotelReimbursement"])}/day
						</div>
						<div class="marketSupplyInfoInstitutionDesc">
							<div class="eigtyFiveCharcters">
								${jobInventory[jobIndex]["facilityDesc"]}...
							<div class="descMoreInfo">
								more
							</div>
							</div>
						</div>
					</div>
					<div class="marketSupplyInfoRight">
						<div class="marketSupplyInfoDuration">
							${jobInventory[jobIndex]["workDays"]} Workdays
						</div>
						<div class="marketSupplyInfoTotalHours">
							${jobInventory[jobIndex]["totalHours"]} Total Hours
						</div>	
						<div class="marketSupplyInfoRates">
							$${jobInventory[jobIndex]["regularRate"]} per Hour
							<div class="marketSupplyInfoOvertimeRates">
							+</br>$${jobInventory[jobIndex]["overtimeRate"]} per Overtime Hour
							</div>
						</div>
						<div class="marketSupplyInfoTotalIncome">
							$${jobInventory[jobIndex]["totalHours"]*jobInventory[jobIndex]["regularRate"]} in Total
							<div class="marketSupplyInfoOvertimeRates">
								+</br>Additional Overtime
							</div>
						</div>									
					</div>
					
				</div>

			</div>

			`	
		)
	}}
}

function fetchJobTradingFloor(product) {
	loadJobPost(product)
	goToDemandMarketPlace()
}


