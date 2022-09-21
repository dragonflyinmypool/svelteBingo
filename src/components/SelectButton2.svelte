<script>
	import {createEventDispatcher} from 'svelte'
	let dispatch = createEventDispatcher()

	export let options
	export let text
	export let gridLabel
	export let gridButton
	export let currentLanguage

	let displayOptions 
	displayOptions = ['None', ...options]

	function changeLang(e) {
		let newLang = e.target.value
		dispatch('changeLang', newLang)
		}
</script>

<label style='grid-area:{gridLabel}' for='withBallDisplay' id='label' > 
	<span>{text}</span>
</label>
<div class='select' style='grid-area:{gridButton}' on:change={changeLang} >
  <select value={currentLanguage}>
		{#each displayOptions as option}
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