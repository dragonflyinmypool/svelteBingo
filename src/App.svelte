<script>

  // ***SETTINGS***
  let settings = {
    showNumberOnMain: true,
    showNumbers:false,
    ballNumbers:[30,75,80,90,100],
    numberOfBalls: 75,
    showLetter: true,
    repeatCall: false,
    languagesAvailable:['None','Chinese', 'English', 'French', 'German', "Spanish"],
    lang1: 'None',
    lang2: 'None',
    lang3: 'None',
    }

  // ***PAGES***
  import MainWithout from "./pages/MainWithout.svelte";
  import MainTogether from "./pages/MainTogether.svelte";
  import Settings from "./pages/Settings.svelte";
  import PickedBalls from "./pages/PickedBalls.svelte";
  import AudioCaller from "./components/AudioCaller.svelte";

  let currentPage = 'MainTogether'

  function changePage(page) {
    if (page == 'main' && !settings.showNumberOnMain) {
      page = 'MainWithout'
    } else if(page == 'main' && settings.showNumberOnMain) {
      page = 'MainTogether'
    }
    currentPage = page;
  }

  // ***GAME SETUP***
  let allBalls;
  let pickedBalls;
  let currentBall;
  let unpickedballs;
  let callBall;
  let currentLetter = 'false';

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

    function sendLetter() {
      if (settings.numberOfBalls == 75) {
         return addLetter(currentBall)
      } else {
        return 'false'
      }
    }
    currentLetter = sendLetter()

   callBall(currentBall)
    
  }

  function addLetter(currentBall) {
    let withLetter

    switch (true) {
      case currentBall == undefined:
        withLetter = '';
        break; 
      case currentBall <= 15:
        withLetter = 'B';
        break;
      case currentBall <= 30:
        withLetter = 'I';
        break;
      case currentBall <= 45:
        withLetter = 'N';
        break;
      case currentBall <= 60:
        withLetter = 'G';
        break;  
      default:
      withLetter = 'O';
  } 
    return withLetter
  }

  // $: displayThis = settings.numberOfBalls == 75 ? addLetter(currentBall) : currentBall 



  function repeatCall() {
    callBall(currentBall)
  }
</script>

<main>
  {#if currentPage == 'MainWithout'}
    <MainWithout 
      {currentBall} 
      {unpickedballs} 
      {newGame} 
      {nextBall}
      {repeatCall}
      {settings}
      {currentLetter}
      showPickedBalls={()=>changePage('ballview')}
      showSettings={()=>changePage('settings')}
    />
  {:else if currentPage == 'MainTogether'}
    <MainTogether
      {currentLetter} 
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
      on:click={()=>changePage('main')}
    />
  {:else if currentPage == 'settings'}
    <Settings
      {settings}
      {newGame}
      on:click={()=>changePage('main')}
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
