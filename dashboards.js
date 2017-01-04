$(document).ready(function(){

	event.preventDefault()
	
	for (arrayIndex in bizSpecialty) {

		$(".dashboardsFields").append(
		`		
		<div class="rowBox search${removeSpaceForClassName(bizSpecialty[arrayIndex])}" onclick="fetchSpecialtyTradingFloor('${removeSpaceForClassName(bizSpecialty[arrayIndex])}')">
			<p>${bizSpecialty[arrayIndex]}</p>
		</div>
		`
	)

	}

})

function fetchSpecialtyTradingFloor(specialty) {
	console.log(specialty)
	goToMarketPlace()
}

