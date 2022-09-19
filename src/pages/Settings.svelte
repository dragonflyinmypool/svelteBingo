<script>
  import MenuButton from "../components/MenuButton.svelte";
  import SelectButton from "../components/SelectButton.svelte";
  import SelectButton2 from "../components/SelectButton2.svelte";

  export let settings
  export let newGame
  
  let check = settings.showNumbers
  
  $: {
  	settings.showNumbers = check
  	settings.mainPage = check ? 'maintogether' : 'main'
		settings = settings
	}

	let checked2 = true

	let ballNumberQ = [30,75,80,90,100];
	let language1 = ['None', 'Arabic', 'Chinese', 'English', 'French', 'Italian']
	let language2 = ['None', 'Arabic', 'Chinese', 'English', 'French', 'Italian']
	let language3 = ['None', 'Arabic', 'Chinese', 'English', 'French', 'Italian']

</script>

<main>
	
	<!-- 1 -->
	<SelectButton options={ballNumberQ} currentSetting={settings.numberOfBalls} {settings} {newGame}/>
		<br>

	<!-- 2 -->
	<SelectButton2 options={language1} text='Voice caller 1' />

	<!-- 3 -->
	<label for="withBallDisplay" id="label"> 
		<span>Show called balls on main screen</span>
	</label>
	<input type="checkbox" name="withBallDisplay" id="withBallDisplay" class="checkbox"  bind:checked={check}>  

	<div></div>
	<!-- 4  -->
	<SelectButton2 options={language2} text='Voice caller 2' />

	<!-- 5  -->
	<label for="withBallDisplay" id="label"> 
		<span>Repeat each ball</span>
	</label>
	<input type="checkbox" name="repeat" id="repeat" class="checkbox"  bind:checked={checked2}>  

	<div></div>
	<!-- 6  -->
	<SelectButton2 options={language3} text='Voice caller 3' />


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