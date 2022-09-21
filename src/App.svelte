<script>

  // ***SETTINGS***
  let call1 = 'Spanish'
  let call2 = ''
  let call3 = ''

  let settings = {
    mainPage: 'main',
    showNumbers:false,
    numberOfBalls: 100,
    showLetter: true,
    repeatCall: false,
    call: [call1,call2,call3],
    }

  let languagesAvailable = ['Chinese', 'English', 'French', 'German', "Spanish"]
  $: settings.mainPage = settings.showNumbers ? 'maintogether' : 'main'

  // ***PAGES***
  import PickedBalls from "./pages/PickedBalls.svelte";
  import Main from "./pages/Main.svelte";
  import MainTogether from "./pages/MainTogether.svelte";
  import Settings from "./pages/Settings.svelte";
  import AudioCaller from "./components/AudioCaller.svelte";

  let pages = ['main','maintogether', 'ballview', 'settings']
  let currentPage = settings.mainPage

  function changePage(page) {
    currentPage = page;
  }

  // ***GAME SETUP***
  let allBalls;
  let pickedBalls;
  let currentBall;
  let unpickedballs;
  let callBall;

  newGame()

  // ***NEW GAME***
  function newGame() {
    allBalls = Array.from({ length: settings.numberOfBalls }, (_, i) => i + 1);
    unpickedballs = [...allBalls]
    currentBall = undefined
    pickedBalls = []
  }

  // ***GAME PLAY***
  function nextBall(event) {
    let randomNumber = Math.floor(Math.random() * (unpickedballs.length-1 + 1))
    currentBall = unpickedballs[randomNumber]
    unpickedballs.splice(randomNumber,1)

    pickedBalls = allBalls.filter((ball) =>{
      return !unpickedballs.includes(ball)
    })

    callBall(currentBall)
  } 

  function repeatCall() {
    callBall(currentBall)
  }

  function changeLang(e) {
    settings.call[0] = e.detail
  }

  function chnageSettings(e) {
    settings = e.detail
  }

</script>

<main>
  {#if currentPage == 'main'}
    <Main 
      {currentBall} 
      {unpickedballs} 
      {newGame} 
      {nextBall}
      {repeatCall}
      {settings}
      showPickedBalls={()=>changePage('ballview')}
      showSettings={()=>changePage('settings')}
    />
  {:else if currentPage == 'maintogether'}
    <MainTogether 
      {allBalls} 
      {pickedBalls} 
      {currentBall} 
      {unpickedballs} 
      {newGame} 
      {nextBall}
      {repeatCall}
      {settings}
      showPickedBalls={()=>changePage('ballview')}
      showSettings={()=>changePage('settings')}
    />
  {:else if currentPage == 'ballview'}
    <PickedBalls 
      {allBalls} 
      {pickedBalls} 
      on:click={()=>changePage(settings.mainPage)}
    />
  {:else if currentPage == 'settings'}
    <Settings
      {settings}
      {newGame}
      {languagesAvailable}
      on:click={()=>changePage(settings.mainPage)}
      {changeLang}
    />
  {/if}

  <AudioCaller {settings} {currentBall} bind:callBall={callBall}/>
</main>

<style>
  main {
    font-weight: bold;
    width: 1700px;
    display: grid;
    grid-template-rows:950px 100px;
    justify-items: center;
    align-items: center;
  }
</style>
