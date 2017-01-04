function goToSearchSection() {
	$(".marketplace").hide()
	$(".frontPage").show()
	console.log("go to search clicked")
}

$(document).ready(function() { 

	event.preventDefault()

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
