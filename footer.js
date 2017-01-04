$(document).ready(function(){ 
	$(".footerContent").append(
	`
	<div class="footerOptionCover">
		<a class="footerOption" onclick="approach()"><p>About</p></a>
		<a class="footerOption" onclick="story()"><p>Careers</p></a>
		<a class="footerOption" onclick="signUp()"><p>Contact us</p></a>
		<a class="footerOption" onclick="signin()"><p>Terms</p></a>
	</div>
	<div class="footerCompanyName">
		<p>Orchard Healthcare LLC</p>
	</div>
	`
	)
})