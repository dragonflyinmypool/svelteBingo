<script>
	export let settings
	export let currentBall

	let audio = new Audio ();

	export function callBall (currentBall) {

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
		console.log(arrayOfLanguages)

		if(arrayOfLanguages.length > 0) {	
			audio.src = 'src/assets/' + settings.lang1 + '/'+ currentBall + '.ogg';
			audio.play();
			if (settings.repeatCall) {
				console.log(currentBall)
			}	
		}
	}
</script>