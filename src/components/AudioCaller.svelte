<script>
	export let settings
	export let currentBall

	let audio = new Audio ();
	
	export function callBall (currentBall) {
		if(settings.lang1 !== 'None') {	
			audio.src = 'src/assets/' + settings.lang1 + '/'+ currentBall + '.ogg';
			audio.play();
			if (settings.repeatCall) {
				console.log(currentBall)
			}	
		}
	}
</script>