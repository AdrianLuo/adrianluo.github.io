// French host array
const frHost = ["adrianluo.github.io", "hpec.goradii.com"];
// Get current host
const newHost = window.location.host;
// DOM Vars
const $logo = $('.logo');
const $title = $('title');
const $heading = $('.contentWrapper .title');
const $content = $('.contentWrapper .content');
// Page contents
const contentApp = {};
// English
contentApp.enHeading = "It's Finally Here!";
contentApp.enContent = "We're happy to announce that the Canada's Children's Hospital Foundations Website will be live on April 20th, 2019. Sign up to learn more and receive ongoing news about CCHF.";
// French
contentApp.frTitle = "Les Fondations D'Hôpitaux Pour Enfants Du Canda | FR We can change the health of Canada";
contentApp.frLogo = "src/cchf-logo-fr-2x.png";
contentApp.frHeading = "FR It's Finally Here!";
contentApp.frContent = "FR We're happy to announce that the Canada's Children's Hospital Foundations Website will be live on April 20th, 2019. Sign up to learn more and receive ongoing news about CCHF.";
// Init function
contentApp.init = () => {
	// Check french host array
	if (frHost.includes(newHost)) {
		$('html').attr("lang", "fr");
		$title.text(contentApp.frTitle);
		$logo.attr("src", contentApp.frLogo);
		$heading.text(contentApp.frHeading);
		$content.text(contentApp.frContent);
	} else {
		$heading.text(contentApp.enHeading);
		$content.text(contentApp.enContent);
	}
	$logo.removeClass('hidden');
}
// Doc ready
$(document).ready(function() {
	contentApp.init();
});