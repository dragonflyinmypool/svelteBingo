<script>
  import MenuButton from "../components/MenuButton.svelte";
  export let settings
  let check = settings.showNumbers
  
  $: {
  	settings.showNumbers = check
  	settings.mainPage = check ? 'maintogether' : 'main'
		settings = settings
	}
	let checked2 = true
</script>

<main>
	
		<label for="withBallDisplay" id="label"> 
		<span>Number of balls</span>
	</label>
	<div class="select">
	  <select>
	    <option value="0">30</option>
	    <option value="1">75</option>
	    <option value="2">80</option>
	    <option value="3">90</option>
	    <option value="4">100</option>
	</div>


		<br>
	<label for="withBallDisplay" id="label"> 
		<span>Voice caller 1</span>
	</label>
	<div class="select">
	  <select>
	    <option value="0">None</option>
	    <option value="1">English</option>
	    <option value="2">Italian</option>
	    <option value="3">Spanish</option>
	    <option value="4">French</option>
	    <option value="4">Arabic</option>
	</div>
	<label for="withBallDisplay" id="label"> 
		<span>Show called balls on main screen</span>
	</label>
	<input type="checkbox" name="withBallDisplay" id="withBallDisplay" class="checkbox"  bind:checked={check}>  

	<div></div>
	<label for="withBallDisplay" id="label"> 
		<span>Voice caller 2</span>
	</label>
	<div class="select">
	  <select>
	    <option value="0">None</option>
	    <option value="1">English</option>
	    <option value="2">Italian</option>
	    <option value="3">Spanish</option>
	    <option value="4">French</option>
	    <option value="4">Arabic</option>
	</div>
	<label for="withBallDisplay" id="label"> 
		<span>Repeat each ball</span>
	</label>
	<input type="checkbox" name="repeat" id="repeat" class="checkbox"  bind:checked={checked2}>  

	<div></div>
	<label for="withBallDisplay" id="label"> 
		<span>Voice caller 3</span>
	</label>
	<div class="select">
	  <select>
	    <option value="0">None</option>
	    <option value="1">English</option>
	    <option value="2">Italian</option>
	    <option value="3">Spanish</option>
	    <option value="4">French</option>
	    <option value="4">Arabic</option>
	</div>

</main>
<MenuButton on:click message='Back' reference='nextBall' />

<style>
	main {
		display: grid;
		grid-template-columns: 400px 300px 300px 400px 300px;
		grid-template-rows: 150px 150px 150px 150px 150px;
		align-items: center;
		justify-items: center;
	}
	.checkbox {
		height: 100px  !important;
		width: 100px  !important;
	}
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