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
		<div class="rowBox search${removeSpaceForClassName(demandProducts[arrayIndex])}" onclick="fetchDemandTradingFloor('${removeSpaceForClassName(demandProducts[arrayIndex])}')">
			<p>${demandProducts[arrayIndex]}</p>
		</div>
		`
		)
	}

})

function fetchDemandTradingFloor(specialty) {
	console.log(specialty)
	goToDemandMarketPlace()
}

function fetchSupplyTradingFloor(specialty) {
	console.log(specialty)
	goToSupplyMarketPlace()
}

