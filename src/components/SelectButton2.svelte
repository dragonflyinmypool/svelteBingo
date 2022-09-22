<script>
	import {createEventDispatcher} from 'svelte'
	let dispatch = createEventDispatcher()

	export let options
	export let currentLanguage
	export let settingToBeChanged
	export let startNewGame
	export let text
	export let gridLabel
	export let gridButton

	function changeSettings(e) {
		let newSettingObject = {
			setting: settingToBeChanged,
			value: e.target.value,
			newGame: startNewGame
		}
		dispatch('changeSettings', newSettingObject)
	}
	console.log(currentLanguage)
</script>

<label style:grid-area={gridLabel} for='withBallDisplay' id='label' > 
	<span>{text}</span>
</label>
<div class='select' style:grid-area={gridButton} on:change={changeSettings} >
  <select value={currentLanguage}>
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
		line-height: 40px;
	}
	select {
		width: 250px;
		font-size: 40px;
	}
</style>