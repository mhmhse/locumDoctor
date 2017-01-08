function createDemandPost() {
	console.log("i need to fill this position asap")

	$(".createDemandButtonCover").append(
		`
		<form class="createDemandForm">


			<div class="createDemandFormInstitution createDemandFormGeneralProperties">

				<p class="createDemandFormSectionHeader">Confirm Institution Information</p>

				<label class="createDemandFormRow">Institution Name</label>
				<input class="createDemandFormRow" type="text" name="Client"></input>

				<div class="createDemandFormCheckBox">
					<label>Keep job posting confidential?</label>
					<input class="createDemandFormCheckBoxInput" type="checkbox" name="DiscloseClientName"></input>
				</div>

				<label class="createDemandFormRow">Contact email for this job</label>
				<input class="createDemandFormRow" type="Email" name="ClientEmail value="emailDuringRegistration@gmail.com"></input>

				<label class="createDemandFormRow">Contact phone number for this job</label>
				<input class="createDemandFormRow" type="tel" name="clientPhone"></input>

				<div class="createDemandFormRowField">
					<div class="createDemandFormRowFieldColumnOne">
						<label class="createDemandFormRowFieldColumnRow">County</label>
						<input class="createDemandFormRowFieldColumnRow" type="text" name="County" placeholder="i.e. Maricopa"></input>
					</div>
					<div class="createDemandFormRowFieldColumnTwo">
						<label class="createDemandFormRowFieldColumnRow">State</label>
			        	<div class="btn-group show-on-hover createDemandFormRowFieldColumnRow">
				          <button type="button" class="btn btn-default dropdown-toggle formStateButton" data-toggle="dropdown">
				            Specialty <span class="caret"></span>
				          </button>
				          <ul class="dropdown-menu searchDropdownSpecialty" role="menu">
				          </ul>
			        	</div>
					</div>
				</div>



			</div>

			<div class="createDemandFormQualifications createDemandFormGeneralProperties">

				<p class="createDemandFormSectionHeader">Qualifications</p>

				<label class="createDemandFormRow">Which clinician do you need to fill?</label>
	        	<div class="btn-group show-on-hover createDemandFormRow">
		          <button type="button" class="btn btn-default dropdown-toggle searchDropdownButton searchDropdownDurationButton" data-toggle="dropdown">
		            Specialty <span class="caret"></span>
		          </button>
		          <ul class="dropdown-menu searchDropdownSpecialty" role="menu">
		          </ul>
	        	</div>

				<label class="createDemandFormRow">Is there any specialty that you would like to include?</label>
				<input class="createDemandFormRow" type="text" name="specialtyBreakdown" placeholder="i.e. Dentist--Implant"></input>        	

	        	<label class="createDemandFormRow">Degree Required</label>
				<input class="createDemandFormRow" type="text" name="Degree" placeholder="i.e. APRN or DDS"></input> 

		        <label class="createDemandFormRow">Desired Prior Experience</label>
				
		        <div class="createDemandFormRowField">
					<input class="createDemandFormRowFieldOne" type="text" name="Degree" placeholder="i.e. 5"></input><p class="createDemandFormRowFieldTwo">Years</p>
				</div>

			</div>

			<div class="createDemandFormDuration createDemandFormGeneralProperties">

				<p class="createDemandFormSectionHeader">Duration</p>

				<div class="createDemandFormRowField">
					<div class="createDemandFormRowFieldColumnOne">

						<label class="createDemandFormRowFieldColumnRow">Start Date</label>
						<input class="createDemandFormRowFieldColumnRow" type="date" name="Degree" placeholder="i.e. 5"></input>
					</div>
					<div class="createDemandFormRowFieldColumnTwo">

						<label class="createDemandFormRowFieldColumnRow">End Date</label>
						<input class="createDemandFormRowFieldColumnRow" type="date" name="Degree" placeholder="i.e. 5"></input>
					</div>
				</div>

				<div class="createDemandFormCheckBox">
					<label>Are the Dates Flexible?</label>
					<input class="createDemandFormCheckBoxInput" type="checkbox" name="DatesFlexible"></input>
				</div>

				<label class="createDemandFormRow">Total Hours</label>
		        <div class="createDemandFormRowField">
					<input class="createDemandFormRowFieldOne" type="text" name="TotalHours" placeholder="i.e. 80"></input><p class="createDemandFormRowFieldTwo">Hours</p>
				</div>

				<label class="createDemandFormRow">Is Overtime Applicable?</lable>
				<input class="createDemandFormRow" type="text" name="overtime" placeholder="i.e. Overtime--upto 20% of hours for 50% extra pay"></input>

			</div>

			<div class="createDemandFormRates createDemandFormGeneralProperties">

				<p class="createDemandFormSectionHeader">Rates</p>

				<label class="createDemandFormRow">Rates per Hour</label>
				<input class="createDemandFormRow" type="range" name="rates" min="50" max="250">

				<label class="createDemandFormRow">Non Local Per Diem Policy</label>
				<input class="createDemandFormRow" type="text" name="nonLocalHousingAndPerDiem" placeholder="i.e. Traveling, Lodging, and Per Diem of $130 Allowed"></input>

				<label class="createDemandFormRow">Do you have any malpractice insurance requirements?</label>
				<input class="createDemandFormRow" type="text" name="malpracticeInsurance" placeholder="i.e. Clinician should have their own malpractice insurance"></input>

				<label class="createDemandFormRow">Insurance Accpeted?</label>
				<input class="createDemandFormRow" type="text" name="insruanceAccpeted" placeholder="i.e. Aetna, Blue Cross, Oscar"></input>


			</div>



		</form>
		`
	)
}