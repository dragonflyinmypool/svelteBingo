<script>

  // ***SETTINGS***
  let settings = {
    mainPage: 'main',
    showNumbers:false,
    numberOfBalls: 75,
    showLetter: true,
    repeatCall: false,
    callLanguages: [],
    autoCallBalls: false,
    speedOfAutoCall: 10,
  }

  $: settings.mainPage = settings.showNumbers ? 'maintogether' : 'main'

  // ***PAGES***
  import PickedBalls from "./pages/PickedBalls.svelte";
  import Main from "./pages/Main.svelte";
  import MainTogether from "./pages/MainTogether.svelte";
  import Settings from "./pages/Settings.svelte";

  let pages = ['main','maintogether', 'ballview', 'settings']
  let currentPage = settings.mainPage

  function changePage(page) {
    currentPage = page;
  }

  // ***GAME SETUP***
  let allBalls = Array.from({ length: 75 }, (_, i) => i + 1);
  let pickedBalls = [];
  let currentBall;
  let unpickedballs;
  newGame()

  // ***NEW GAME***
  function newGame() {
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
  }  
</script>

<main>
  {#if currentPage == 'main'}
    <Main 
      {currentBall} 
      {unpickedballs} 
      {newGame} 
      {nextBall} 
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
      on:click={()=>changePage(settings.mainPage)}
    />
  {/if}

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
