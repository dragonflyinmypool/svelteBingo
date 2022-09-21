<script>
  import MenuButton from "../components/MenuButton.svelte";
  import SelectButton from "../components/SelectButton.svelte";
  import SelectButton2 from "../components/SelectButton2.svelte";
  import CheckBox from "../components/CheckBox.svelte";

  export let settings
  export let newGame
  export let languagesAvailable
  export let changeLang

  let check = settings.showNumbers
  
  $: {
  	settings.showNumbers = check
  	settings.mainPage = check ? 'maintogether' : 'main'
		settings = settings
	}

	let ballNumberQ = [30,75,80,90,100];
	let languages = ['Off', 'Chinese', 'English', 'French', 'German', "Spanish"]
</script>

<main>
	
	<!-- ROW 1  -->
	<!-- Number of balls -->
	<SelectButton options={ballNumberQ} currentSetting={settings.numberOfBalls} {settings} {newGame} />

	<!-- Show called -->
	<CheckBox {check} label='Show called balls on main screen' gridLabel='R1L2' gridButton='R1B2' />

	<!-- Reapeat each ball -->
	<CheckBox label='Repeat each ball' gridLabel='R1L3' gridButton='R1B3'/>

	<!-- ROW 2 -->
	<SelectButton2 on:changeLang={changeLang} options={languagesAvailable} currentLanguage={settings.call[0]} text='Voice caller 1' gridLabel='R2L1' gridButton='R2B1' />
	
</main>

<MenuButton on:click message='Back' reference='nextBall' />

<style>
	main {
		display: grid;
		grid-template-columns: 300px 300px 300px 300px 300px;
		grid-template-rows: 150px 150px 150px 150px 150px;
		grid-template-areas: 
		'R1L1 R1B1 . R2L1 R2B1'
		'R1L2 R1B2 . R2L2 R2B2'
		'R1L3 R1B3 . R2L3 R2B3'
		;

		align-items: center;
		justify-items: center;
	}

	select {
		width: 250px;
		font-size: 40px;
	}
</style>