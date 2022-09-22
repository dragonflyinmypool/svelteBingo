<script>
  import SelectButton from "../components/SelectButton.svelte";
  import CheckBox from "../components/CheckBox.svelte";
  import MenuButton from "../components/MenuButton.svelte";

  export let settings
  export let newGame

  function changeSettings(e) {
  	let input = e.detail.value
 	
    if(typeof settings[e.detail.setting] == 'number'){
    	input =	Number(input)
    }
    
    settings[e.detail.setting] = input
    
  	if(e.detail.newGame == 'true'){
  		newGame()
  	}
  }
</script>

<main>
	<!-- ROW 1  -->
	<!-- Number of balls -->
	<SelectButton
	options={settings.ballNumbers} 
	currentLanguage={settings.numberOfBalls}
	startNewGame = true 
	settingToBeChanged="numberOfBalls"
	on:changeSettings={changeSettings} 
	text='Number of ball' 
	gridLabel='R1L1' 
	gridButton='R1B1' />

	<!-- Show called -->
	<CheckBox
	currentSetting={settings.showNumberOnMain}
	startNewGame = false
	settingToBeChanged="showNumberOnMain" 
	on:changeSettings={changeSettings} 
	label='Show called balls on main screen' 
	gridLabel='R1L2' 
	gridButton='R1B2' />	

	<!-- ROW 2 -->
	<!-- Change language -->
	<SelectButton
	options={settings.languagesAvailable} 
	currentLanguage={settings.lang1} 
	settingToBeChanged="lang1"
	on:changeSettings={changeSettings} 
	text='Voice caller 1' 
	gridLabel='R2L1' 
	gridButton='R2B1' 
	startNewGame = false />
	
	<SelectButton
	options={settings.languagesAvailable} 
	currentLanguage={settings.lang2} 
	settingToBeChanged="lang2"
	on:changeSettings={changeSettings} 
	text='Voice caller 2' 
	gridLabel='R2L2' 
	gridButton='R2B2' 
	startNewGame = false />

	<SelectButton
	options={settings.languagesAvailable} 
	currentLanguage={settings.lang3} 
	settingToBeChanged="lang3"
	on:changeSettings={changeSettings} 
	text='Voice caller 3' 
	gridLabel='R2L3' 
	gridButton='R2B3' 
	startNewGame = false />

	<!-- Reapeat each ball -->
	<CheckBox
	currentSetting={settings.repeatCall}
	startNewGame = false
	settingToBeChanged="repeatCall" 
	on:changeSettings={changeSettings} 
	label='Repeat call' 
	gridLabel='R2L4' 
	gridButton='R2B4' />	
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
		'R1L4 R1B4 . R2L4 R2B4';
		align-items: center;
		justify-items: center;
	}
</style>