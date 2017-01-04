$(document).ready(function(){ 
	$(".navbarContent").append(
	`
	<div class="navbarOptionCover">
		<a class="navbarOption" onclick="approach()">Our Way</a>
		<a class="navbarOption" onclick="story()">Our Story</a>
		<a class="navbarOption" onclick="signUp()">Sign Up</a>
		<a class="navbarOption" onclick="signin()">Sign In</a>
	</div>
	`
	)
})