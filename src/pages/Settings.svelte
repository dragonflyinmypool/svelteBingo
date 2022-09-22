<script>
  import SelectButton from "../components/SelectButton.svelte";
  import SelectButton2 from "../components/SelectButton2.svelte";
  import CheckBox from "../components/CheckBox.svelte";
  import MenuButton from "../components/MenuButton.svelte";

  export let settings
  export let newGame


  function changeSettings(e) {
  	let input = e.detail.value 
  	console.log(typeof input, typeof settings[e.detail.setting])
 	
    if(typeof settings[e.detail.setting] == 'number'){
    	input =	Number(input)
    }
    settings[e.detail.setting] = input

  	if(e.detail.newGame){
  		newGame()
  	}
  }
</script>

<main>
	<!-- ROW 1  -->
	<!-- Number of balls -->
	<SelectButton2
	options={settings.ballNumbers} 
	currentLanguage={settings.numberOfBalls}
	startNewGame = true 
	settingToBeChanged="numberOfBalls"
	on:changeSettings={changeSettings} 
	text='Number of ball' 
	gridLabel='R1L1' 
	gridButton='R1B1' />	

	<!-- Show called -->
	<CheckBox check={settings.showNumbers} 
	label='Show called balls on main screen' 
	gridLabel='R1L2' 
	gridButton='R1B2' />

	<!-- Reapeat each ball -->
	<CheckBox check={settings.repeatCall} 
	label='Repeat each ball' 
	gridLabel='R1L3' 
	gridButton='R1B3'/>

	<!-- ROW 2 -->
	<!-- Change language -->
	<SelectButton2
	options={settings.languagesAvailable} 
	currentLanguage={settings.lang1} 
	settingToBeChanged="lang1"
	on:changeSettings={changeSettings} 
	text='Voice caller 1' 
	gridLabel='R2L1' 
	gridButton='R2B1' 
	startNewGame = false />

	<!-- Change Number -->
	
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
		'R1L3 R1B3 . R2L3 R2B3';
		align-items: center;
		justify-items: center;
	}
</style>