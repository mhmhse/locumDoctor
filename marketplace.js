function goToSearchSection() {
	$(".marketplace").hide()
	$(".frontPage").show()
	console.log("go to search clicked")
}

$(document).ready(function() { 

	event.preventDefault()

	// $(".fullTimeIcon").hover(
	// 	function() {
	// 		$(".iconLegend").text("Looking for full time")
	// 	}, function() {
	// 		$(".iconLegend").empty()
	// 	}
	// )

	// $(".partTimeIcon").hover(
	// 	function() {
	// 		$(".iconLegend").text("Looking for part time")
	// 	}, function() {
	// 		$(".iconLegend").empty()
	// 	}
	// )

	// $(".overTimeIcon").hover(
	// 	function() {
	// 		$(".iconLegend").text("Overtime is OK")
	// 	}, function() {
	// 		$(".iconLegend").empty()
	// 	}
	// )

	// $(".nightShiftIcon").hover(
	// 	function() {
	// 		$(".iconLegend").text("I am willing to do nightshift")
	// 	}, function() {
	// 		$(".iconLegend").empty()
	// 	}
	// )

	// $(".onCallIcon").hover(
	// 	function() {
	// 		$(".iconLegend").text("On call is fine by me")
	// 	}, function() {
	// 		$(".iconLegend").empty()
	// 	}
	// )

	// $(".travellingOkIcon").hover(
	// 	function() {
	// 		$(".iconLegend").text("Traveling is good")
	// 	}, function() {
	// 		$(".iconLegend").empty()
	// 	}
	// )


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

	$(".marketButtonsCover").append(
		`
		<div class="marketplaceButtons">
			<button 
				type="button" 
				class="btn btn-default btn-sm marketPlaceButton"
				onclick="goToSearchSection()"
			>
			  Return to Prev Page
			</button>
			<button type="button" class="btn btn-default btn-sm marketPlaceButton">
			  Advanced Search
			</button>
		</div>
		`
	)

	$(".marketplace").hide()

	document.addEventListener("keydown", KeyCheck);  //or however you are calling your method

	function KeyCheck(event) {
	   var KeyID = event.keyCode;
	   switch(KeyID)
	   {
	      case 8:
	      goToSearchSection();
	      break; 
	      case 46:
	      goToSearchSection();
	      break;
	      default:
	      break;
	   }
	}

})
