function highlightHowItWorks() {
	$(".howItWorksButton").css("color", "#00A7F2");
	$(".howItWorksButton").css("background-color", "white");
	$(".howItWorksButton").css("border-radius", "5px");
}

function unHighlightOrchardButton() {
	$(".orchardButton").css("color", "white");
	$(".orchardButton").css("background-color", "#00A7F2");
}

function showOnlyHowItWorks() {
	$(".searchFields").hide();
	$(".dashboards").hide();
	// $(".navbarOptionCoverCenter").show();
	$(".frontPageHowItWorks").show();
	$(".navbarOptionCoverCenter").show();
	unHighlightOrchardButton();
	highlightHowItWorks();
}

$(document).ready(function(){

	setTimeout(function(){
		$(".orchardButton").css("background-color", "white");
		$(".orchardButton").css("color", "#00A7F2");
		$(".orchardButton").css("animation", "fadein 1s")
	}, 4000)

	$(".navbarContent").append(
	`
	<div class="navbarOptionCover">
		<div class="navbarOptionCoverLeft">
			<div class="navbarLogo">
				<div class="navbarOptionLeftCompanyLogo"></div>
				<a class="orchardButton" onclick="goToSearchSection()">Orchard</a>
				<a class="navbarOptionLeft howItWorksButton" onclick="showOnlyHowItWorks()">How it Works</a>
			</div>
		</div>

		<div class="navbarOptionCoverCenter">
			<div class="headerNavigationButtons">
				<span 
					class="glyphicon glyphicon-menu-left goToPrevPageButton" 
					onclick="goToSearchSection()" 
					aria-hidden="true">
				</span>
				<span 
					class="glyphicon glyphicon-search goToPrevPageButton" 
					onclick="openAdvancedSearchField()" 
					aria-hidden="true">
				</span>
			</div>
		</div>

		<div class="navbarOptionCoverRight">
			<a class="navbarOptionRight helpButton" onclick="signUp()">Help</a>
			<a class="navbarOptionRight signUpButton" onclick="signUp()">Sign Up</a>
			<a class="navbarOptionRight signInButton" onclick="signin()">Sign In</a>
		</div>
	</div>
	`
	)
})