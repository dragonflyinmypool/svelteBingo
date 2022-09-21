<script>
	export let settings
	export let currentBall

	let audio = new Audio ();
	
	export function callBall (currentBall) {
			audio.src = 'src/assets/' + settings.call[0] + '/'+ currentBall + '.ogg';
				audio.play();
		}
</script>