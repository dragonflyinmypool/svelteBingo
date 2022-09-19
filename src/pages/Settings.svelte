

<script>
  import MenuButton from "../components/MenuButton.svelte";
  export let settings
  let check = settings.showNumbers
  
  $: {
  	settings.showNumbers = check
  	settings.mainPage = check ? 'maintogether' : 'main'
		settings = settings
	}
</script>

<main>
	
	<label for="withBallDisplay" id="label"> 
		<span>Show called balls on main screen</span>
	</label>
	<input type="checkbox" name="withBallDisplay" id="withBallDisplay" class="checkbox"  bind:checked={check}>  

</main>
<MenuButton on:click message='Back' reference='nextBall' />

<style>
	main {
		display: grid;
		grid-template-columns: 600px 100px 300px 600px 100px;
		grid-template-rows: 150px 150px 150px 150px 150px;
	}
	.checkbox {
		height: 100px;
	}
	label {
		display: flex;
		align-items: center;
	}
</style>