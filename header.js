$(document).ready(function(){ 
	$(".navbarContent").append(
	`
	<div class="navbarOptionCover">
		<div class="navbarOptionCoverLeft">
			<div class="navbarLogo">
				<a class="navbarOption" onclick="approach()">Our Approach</a>
			</div>
		</div>

		<div class="navbarOptionCoverRight">
			<a class="navbarOption" onclick="signUp()">Help</a>
			<a class="navbarOption" onclick="signUp()">Sign Up</a>
			<a class="navbarOption" onclick="signin()">Sign In</a>
		</div>
	</div>
	`
	)
})