$(window).scroll(function (event) {

    var didItScroll = false

    // if (didItScroll == false) {
    // 	didItScroll = true;

    // 	$(".frontPage").css("background-color", "white")
    // 	$(".frontPage").css("color", "#00A7F2")

    // 	$(".selectionCheckBox").css("border-color", "#00A7F2")
    // 	$(".selectionCheckBox").css("color", "#00A7F2")

    // 	console.log("working")
    // }

});

var enteredCost = 150;
var enteredHour = 160;
var totalOrchardFeePerHour = 15;
var totalBrokerFeePerHour = 75;
var totalClinicianPay = 24000;
var totalSavings = 9600

function calcPaymentToClinician(enteredCost, enteredHour) {
    var value = Math.ceil(enteredCost*enteredHour)
    totalClinicianPay = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calcTotalOrchardServiceFee (enteredCost, enteredHour, commissionFactor) {
    var value = Math.ceil(enteredCost*enteredHour*commissionFactor)
    totalOrchardFee = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calcTotalOrchardFeePerHour (enteredCost, commissionFactor) {
    var value = Math.ceil(enteredCost*(commissionFactor+1))
    totalOrchardFeePerHour = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calcTotalOrchardCost (enteredCost, enteredHour, commissionFactor) {
    var value = Math.ceil(enteredCost*enteredHour*(commissionFactor+1))
    totalOrchardCost = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calcTotalBrokerServiceFee (enteredCost, enteredHour, commissionFactor) {
    var value = Math.ceil(enteredCost*enteredHour*commissionFactor)
    totalBrokerFee = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calcTotalBrokerFeePerHour (enteredCost, commissionFactor) {
    var value = Math.ceil(enteredCost*(commissionFactor+1))
    totalBrokerFeePerHour = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calcTotalBrokerCost (enteredCost, enteredHour, commissionFactor) {
    var value = Math.ceil(enteredCost*enteredHour*(commissionFactor+1))
    totalBrokerCost = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calcTotalSavings (enteredCost, enteredHour, brokerCommissionFactor, orchardCommissionFactor) {
    var value = Math.ceil(enteredCost*enteredHour*(brokerCommissionFactor-orchardCommissionFactor))
    totalSavings = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function orchardCostChanged() {
    enteredCost = $("#costInput").val();
    $("#costShow").text("$"+enteredCost+"/hr")

    calcPaymentToClinician(enteredCost, enteredHour)
    calcTotalOrchardServiceFee(enteredCost, enteredHour, 0.1)
    calcTotalOrchardFeePerHour (enteredCost, 0.1)
    calcTotalOrchardCost (enteredCost, enteredHour, 0.1)
    calcTotalBrokerServiceFee(enteredCost, enteredHour, 0.5)
    calcTotalBrokerFeePerHour (enteredCost, 0.5)
    calcTotalBrokerCost (enteredCost, enteredHour, 0.5)
    calcTotalSavings(enteredCost, enteredHour, 0.5, 0.1)

    $("#orchardPayToClinician").text("$"+totalClinicianPay)
    $("#totalOrchardFee").text("$"+totalOrchardFee)    
    $("#totalOrchardFeePerHour").text("$"+totalOrchardFeePerHour)
    $("#totalOrchardCost").text("$"+totalOrchardCost)
    $("#brokerPayToClinician").text("$"+totalClinicianPay)
    $("#totalBrokerFee").text("$"+totalBrokerFee)    
    $("#totalBrokerFeePerHour").text("$"+totalBrokerFeePerHour)
    $("#totalBrokerCost").text("$"+totalBrokerCost)
    $("#orchardSaves").text("$"+totalSavings+" Savings")
}

function orchardHourChanged() {
    enteredHour = $("#hourInput").val();
    $("#hourShow").text(enteredHour+"hrs ("+Math.ceil(enteredHour/40)+"weeks)")
    
    calcPaymentToClinician(enteredCost, enteredHour)
    calcTotalOrchardServiceFee(enteredCost, enteredHour, 0.1)
    calcTotalOrchardFeePerHour (enteredCost, 0.1)
    calcTotalOrchardCost (enteredCost, enteredHour, 0.1)
    calcTotalBrokerServiceFee(enteredCost, enteredHour, 0.5)
    calcTotalBrokerFeePerHour (enteredCost, 0.5)
    calcTotalBrokerCost (enteredCost, enteredHour, 0.5)
    calcTotalSavings(enteredCost, enteredHour, 0.5, 0.1)

    $("#orchardPayToClinician").text("$"+totalClinicianPay)
    $("#totalOrchardFee").text("$"+totalOrchardFee)    
    $("#totalOrchardFeePerHour").text("$"+totalOrchardFeePerHour)
    $("#totalOrchardCost").text("$"+totalOrchardCost)
    $("#brokerPayToClinician").text("$"+totalClinicianPay)
    $("#totalBrokerFee").text("$"+totalBrokerFee)    
    $("#totalBrokerFeePerHour").text("$"+totalBrokerFeePerHour)
    $("#totalBrokerCost").text("$"+totalBrokerCost)
    $("#orchardSaves").text("$"+totalSavings+" Savings")
}


$(document).ready(function(){  
	console.log("working")
	$(".frontPageHowItWorks").append(
	`
	<div class="introQuote">
		Making freelance clinical work easy.</br>That's us. That's all we think about.
	</div>

	<div class="introDetailsContianer">
		<div class="introDetailsTextArea">
			Orchard replaces traditional staffing firms with a streamlined platform.
			We empower clinicians to earn more whenever and wherever they want. 
		</div>

		<div class="forCliniciansInfo">

            <div class="introDetailHeader">
                For Clinicians
            </div>

            <div class="forCliniciansInfoRow">
                <div class="forCliniciansLeft">
					<span class="glyphicon glyphicon-wrench" aria-hidden="true"></span>
                </div>
                <div class="forCliniciansRight">

                    <div class="introSubheader">
                        Work When & Where You Want
                    </div>

                    <div class="introTopic">
                        We keep your options open.</br>
                        Flexible dates and locations!</br>
                        Part-time, full-time, and traveling.
                    </div>
                </div>
            </div>

            <div class="forCliniciansInfoRow">
                <div class="forCliniciansLeft">
                    <span class="glyphicon glyphicon-road" aria-hidden="true"></span>
                </div>
                <div class="forCliniciansRight">

                    <div class="introSubheader">
                        Transparency & Options
                    </div>

                    <div class ="introTopic">
                        Full job details and requirements.</br>
                        View wages and reviews before interview.</br>
                        That's something you'll never get from staffing firms.
                    </div>
                </div>
            </div>

            <div class="forCliniciansInfoRow">
                <div class="forCliniciansLeftThirdRow">
                	<div class="forCliniciansLeftTopRow">
	                    <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
	                </div>
	                <div class="forCliniciansLeftBottomRow">
	                    <span class="forCliniciansLeftBottomRowIcon glyphicon glyphicon-user" aria-hidden="true"></span>
	                    <span class="forCliniciansLeftBottomRowIcon glyphicon glyphicon-user" aria-hidden="true"></span>
	                </div>
                </div>
                <div class="forCliniciansRight">

                    <div class="introSubheader">
                        Know Your Colleagues
                    </div>

                    <div class="introTopic">
                        Workplace is all about who you are with.</br>
                        Know who you will be working with,</br>
                        and stay informed with where you will be working at.
                    </div>
                </div>
            </div>
            <button type="button" class="buttonMargin btn btn-default btn-md introBottomButton">
            	See our Jobs
            </button>
		</div>

        <div class="forCliniciansInfo">
            <div class="introDetailHeader">
                For Institutions
            </div>

             <div class="forCliniciansInfoRow">
                <div class="forCliniciansLeft">
                    <span class="glyphicon glyphicon-piggy-bank" aria-hidden="true"></span>
                </div>
                <div class="forCliniciansRight">

                    <div class="introSubheader">
                        Lower Costs
                    </div>

                    <div class="introTopic">
                    	Orchard: 10% markup.</br>
                    	Traditional Broker: 40% - 70% markup.</br>
                    	Save 30% - 50% for hiring the same person.</br>
                    </div>
                </div>
            </div>

            <div class="forCliniciansInfoRow">
                <div class="forCliniciansLeft">
                    <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                </div>
                <div class="forCliniciansRight">

                    <div class="introSubheader">
                    	Hire the Person, Not the Brand
                    </div>

                    <div class ="introTopic">
                        We provide integrated review system.</br>
                    	Clinicians receive feedback from colleagues & employers.</br>
                    	You will have a data-driven picture of who you're hiring.
                    </div>
                </div>
            </div>

            <div class="forCliniciansInfoRow">
                <div class="forCliniciansLeft">
                    <span class="glyphicon glyphicon-sort-by-alphabet" aria-hidden="true"></span>
                </div>
                <div class="forCliniciansRight">

                    <div class="introSubheader">
                    	Simple Logistics, Remove Headache
                    </div>

                    <div class ="introTopic">
                    	Communicate with clinicians directly in one place.</br>
                        Hold a single source of truth for credentials & contact info.</br>
                        We will share our insights for you to hire the best talents.
                    </div>
                </div>
            </div>
        </div>

        <div class="clinicSavings">

       		<div class="introDetailHeader">
       			Savings Calculator
       		</div
            
            <div class="clinicianSavingsRow">
                <div class="clinicianSavingsContent">
                    <div class="costRow">
                        <div class="costShowDesc">Per Hour Fee</div>
                        <div id="costShow" class="costHourOutput">$150/hr</div>
                    </div>
                    <input id="costInput" class="costSlider" type="range" name="points" min="40" max="400" value="150" onchange="orchardCostChanged()"> 

                    <div class="costRow">
                        <div class="totalHoursDesc">Total Hours</div>
                        <div id="hourShow" class="totalHoursOutput">160hrs (4weeks)</div>
                    </div>
                    <input id="hourInput" class="costSlider" type="range" name="points" min="40" max="480" value="160" onchange="orchardHourChanged()">
                </div>
            </div>

            <div class="clinicianSavingsRow">
                <div class="clinicianSavingsFigures">

                    <div class="brokerCost">
                        <div class="orchardCostHeader">
                            Traditional Staffing Brokers
                        </div>

                        <div class="costRow" id="broakerFee">
                            <div class="costShowDesc">Payment to Clinician</div>
                            <div id="brokerPayToClinician" class="costHourOutput">$12,000</div>
                        </div>

                        <div class="costRow" id="broakerFee">
                            <div class="costShowDesc">Broker Service Fee (50%)</div>
                            <div id="totalBrokerFee" class="costHourOutput">$6,000</div>
                        </div>

                        <div class="costRow">
                            <div class="totalPerHourCostLeft">Total Per Hour Cost</div>
                            <div id="totalBrokerFeePerHour" class="totalPerHourCostRight">$225/hr</div>
                        </div>

                        <div class="costRow">
                            <div class="costShowTotalFee costShowTotalFeeLeft">Total Cost</div>
                            <div id="totalBrokerCost" class="costShowTotalFee costShowTotalFeeRight">$36,000</div>
                        </div>

                    </div>

                    <div class="orchardCost">
                        <div class="orchardCostHeader">
                            Orchard's Cost
                        </div>

                        <div class="costRow" id="broakerFee">
                            <div class="costShowDesc">Payment to Clinician</div>
                            <div id="orchardPayToClinician" class="costHourOutput">$12,000</div>
                        </div>

                        <div class="costRow" id="broakerFee">
                            <div class="costShowDesc">Orchard Service Fee (10%)</div>
                            <div id="totalOrchardFee" class="costHourOutput">$1,200</div>
                        </div>
                        <div class="costRow">
                            <div class="totalPerHourCostLeft">Total Per Hour Cost</div>
                            <div id="totalOrchardFeePerHour" class="totalPerHourCostRight">$165/hr</div>
                        </div>
                        <div class="costRow">
                            <div class="costShowTotalFee costShowTotalFeeLeft">Total Cost</div>
                            <div id="totalOrchardCost" class="costShowTotalFee costShowTotalFeeRight">$26,400</div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="clinicianSavingsRow">
                <div id="orchardSaves">$9,600 Savings</div>
                <button type="button" class="buttonMargin btn btn-default btn-md introBottomButton">
                  See Our Talents
                </button>
            </div>
        </div>
	</div>
	`
	)
})