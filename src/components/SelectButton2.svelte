<script>
	export let options
	export let text
</script>

<label for="withBallDisplay" id="label"> 
	<span>{text}</span>
</label>
<div class="select">
  <select>
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