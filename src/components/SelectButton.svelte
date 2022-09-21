<script>
	export let options
	export let settings
	export let currentSetting
	export let newGame

	function switchSetting(e) {
		settings.numberOfBalls = Number(e.target.value)
		newGame()
	}
</script>


<label for="withBallDisplay" id="label" style='grid-area:R1L1' > 
	<span>Number of balls</span>
</label>
	
<div class="select" style='grid-area:R1B1' >
  <select bind:value={currentSetting} on:change="{switchSetting}">
		{#each options as option}
			<option value={option}>
				{option}
			</option>
		{/each}
	</select>
</div>


<style>
	label {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	select {
		width: 250px;
		font-size: 40px;
	}
</style>