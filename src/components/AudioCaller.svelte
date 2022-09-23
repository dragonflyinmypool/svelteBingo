<script>
	export let settings
	export let currentBall
	export let currentLetter

	let audio = new Audio ();

	export function callBall (currentBall, currentLetter) {
		let timing = 0;


		// Make an array with all the languages to be called
		function checkSettings (){
			let arrayOfLanguages = []
			if (settings.lang1 !== 'None') {
				arrayOfLanguages.push(settings.lang1)
			}
			if (settings.lang2 !== 'None') {
				arrayOfLanguages.push(settings.lang2)
			}
			if (settings.lang3 !== 'None') {
				arrayOfLanguages.push(settings.lang3)
			}
			return arrayOfLanguages
		}
		let arrayOfLanguages = checkSettings()

		
		// Create a que of all calls to be said including: whatToSay and lang
		// [[whatToSay, lang],[whatToSay, lang],[whatToSay, lang]]
		let callList = arrayOfLanguages.map(myFunction)
		
		function myFunction(lang) {		
			console.log(currentBall, currentLetter)
			return [currentBall, lang]
		}
	
		executeQueOfCalls()
	
		// GO through the call list, send to the timer
		function executeQueOfCalls (){
			for (var i = 0; i < callList.length; i++) {
				sendTheCallsWith(callList[i])
			}
		}

		// Send the calls to the caller with a timer
		function sendTheCallsWith(call) {
				setTimeout(() => {
  				theCaller(call[0], call[1]);
				}, timing);
			timing = timing + 2500
		}

		//Call the calls 
		function theCaller (whatToSay, lang){
			console.log(whatToSay, lang)
			audio.src = 'src/assets/' + lang + '/'+ whatToSay + '.ogg';
			audio.play();
		}
	}
</script>