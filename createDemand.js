function createDemand() {

	$(".partTimeMedicalJobBoard").append(
		`
		<form class="createDemandForm">

			<div class="createDemandFormRowCover">

				<div class="createDemandFormInstitution createDemandFormGeneralProperties">

					<p class="createDemandFormSectionHeader">Institution Information</p>

					<label class="createDemandFormRow">
						Institution Name
						<div class="confidentialityRightAlign">
							<label>Keep the Name Confidential?</label>
							<input class="createDemandFormCheckBoxInput" type="checkbox" name="DiscloseClientName"></input>
						</div>
					</label>
					<input class="createDemandFormRow" type="text" name="Client"></input>

					<label class="createDemandFormRow">Contact email for this job</label>
					<input class="createDemandFormRow" type="Email" name="ClientEmail value="emailDuringRegistration@gmail.com"></input>

					<label class="createDemandFormRow">Contact phone number for this job</label>
					<input class="createDemandFormRow" type="tel" name="clientPhone"></input>

					<div class="createDemandFormRowField">
						<div class="createDemandFormRowFieldColumnCountyState">
							<label class="createDemandFormRowFieldColumnCountyStateRow">County</label>
							<input class="formCountyButton" type="text" name="County" placeholder="i.e. Maricopa"></input>
						</div>
						<div class="createDemandFormRowFieldColumnCountyState">
							<label class="createDemandFormRowFieldColumnCountyStateRow">State</label>
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

			</div>

			<div class="createDemandFormRowCover">

				<div class="createDemandFormDuration createDemandFormGeneralProperties">

					<p class="createDemandFormSectionHeader">Duration and Insurance</p>

					<div class="createDemandFormRowField">
						<div class="DemandFormDateCover">
							<label class="DemandFormDate">Start Date</label>
							<input class="DemandFormDateInput" type="date" name="Degree" placeholder="i.e. 5"></input>
						</div>
						<div class="DemandFormDateCover">
							<label class="DemandFormDate">
								End Date
								<div class="DemandFormDateFlexCoverX">
									<label class="DemandFormFlexDateX">Flexible?</label>
									<input class="DemandFormFlexDateInputX" type="checkbox" name="DatesFlexible"></input>
								</div>
							</label>
							<input class="DemandFormDateInput" type="date" name="Degree" placeholder="i.e. 5"></input>
						</div>
					</div>

					<div class="createDemandFormRowField">
						<div class="DemandFormDateCover">
							<div class="DemandFormWeeklyHours">
								<label class="DemandFormDate">Weekly Hours</label>
								<input class="DemandFormDateInput" type="text" name="Degree" placeholder="i.e. 40 (Hours Per Week)"></input> 
							</div>
						</div>
						<div class="DemandFormTotalHours">
							<div class="DemandFormDateCover">
								<label class="DemandFormDate">Total Hours</label>
								<input class="DemandFormDateInput" type="text" name="Degree" placeholder="i.e. 160 (Hours Per Week)"></input>
							</div>
						</div>
					</div>

					<label class="createDemandFormRow">Do you have any malpractice insurance requirements?</label>
					<input class="createDemandFormRow" type="text" name="malpracticeInsurance" placeholder="i.e. Clinician should have their own malpractice insurance"></input>

					<label class="createDemandFormRow">Which malpractice insurance do you accept?</label>
					<input class="createDemandFormRow" type="text" name="insruanceAccpeted" placeholder="i.e. Aetna, Blue Cross, Oscar"></input>

				</div>

				<div class="createDemandFormRates createDemandFormGeneralProperties">

					<p class="createDemandFormSectionHeader">Payrates</p>

					<div class="createDemandFormRowField">
						<div class="DemandFormDateCover">
							<div class="DemandFormRegularRates">
								<label class="DemandFormDate">Regular Rates</label>
								<input class="DemandFormDateInput" type="text" name="Degree" placeholder="i.e. 100 (per Hour)"></input> 
							</div>
						</div>
						<div class="DemandFormDateCover">
							<div class="DemandFormRegularRates">
								<label class="DemandFormDate">Overtime Rates</label>
								<input class="DemandFormDateInput" type="text" name="Degree" placeholder="i.e. 150 (per Hour)"></input> 
							</div>
						</div>
					</div>

					<div class="createDemandFormRowField">
						<div class="DemandFormDateCover">
							<div class="DemandFormRegularRates">
								<label class="DemandFormDate">Per Diem</label>
								<input class="DemandFormDateInput" type="text" name="Degree" placeholder="i.e. 100 (per Day)"></input> 
							</div>
						</div>
						<div class="DemandFormDateCover">
							<div class="DemandFormRegularRates">
								<label class="DemandFormDate">Hotel Reimbursements</label>
								<input class="DemandFormDateInput" type="text" name="Degree" placeholder="i.e. 250 (per Day)"></input> 
							</div>
						</div>
					</div>

				</div>

			</div>

		</form>
		`
	)

 	loadDropdowns();
 	
}