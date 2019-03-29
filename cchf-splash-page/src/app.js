// French host array
const frHost = ["hpec.goradii.com"];
// Get current host
const newHost = window.location.host;
// DOM Vars
const $logo = $('.logo');
const $title = $('title');
const $heading = $('.contentWrapper .title');
const $content = $('.contentWrapper .content');
const $html = $("html");
const $form = $("form");
const $inputEmail = $("input.email");
const $inputFormName = $("input.inputName");
const $inputSubmit = $("input.submit");
// Page contents
const contentApp = {};
// English Copy
contentApp.enHeading = "It's Finally Here!";
contentApp.enContent = "We're happy to announce that the Canada's Children's Hospital Foundations Website will be live on April 20th, 2019. Sign up to learn more and receive ongoing news about CCHF.";
// French Copy
contentApp.frTitle = "Les Fondations D'Hôpitaux Pour Enfants Du Canda | FR We can change the health of Canada";
contentApp.frLogo = "src/cchf-logo-fr-2x.png";
contentApp.frHeading = "FR It's Finally Here!";
contentApp.frContent = "FR We're happy to announce that the Canada's Children's Hospital Foundations Website will be live on April 20th, 2019. Sign up to learn more and receive ongoing news about CCHF.";
contentApp.frInputEmail = "FR Enter your email address";
contentApp.frInputSubmit = "FR Subscribe";
// French Form IDs
contentApp.frFormID = "https://childrenshospitals.us18.list-manage.com/subscribe/post?u=b9fd2359b13c7c0104d04f7af&amp;id=5a763795b6";
contentApp.frInputFormName = "b_b9fd2359b13c7c0104d04f7af_5a763795b6";
// Init function
contentApp.init = () => {
	// Check french host array
	if (frHost.includes(newHost)) {
		$html.attr("lang", "fr");
		$title.text(contentApp.frTitle);
		$logo.attr("src", contentApp.frLogo);
		$heading.text(contentApp.frHeading);
		$content.text(contentApp.frContent);
		$form[0].action = contentApp.frFormID;
		$inputEmail[0].placeholder = contentApp.frInputEmail;
		$inputFormName[0].name = contentApp.frInputFormName;
		$inputSubmit[0].value = contentApp.frInputSubmit;
	} else {
		$heading.text(contentApp.enHeading);
		$content.text(contentApp.enContent);
		
	}
	$logo.removeClass('hidden');
}
contentApp.init();
// Doc ready
// $(document).ready(function() {
	
// });