<script>
  // ***PAGES***
  import PickedBalls from "./pages/PickedBalls.svelte";
  import Main from "./pages/Main.svelte";
  import Settings from "./pages/Settings.svelte";

  let pages = ['main', 'ballview', 'settings']
  let currentPage = 'main'

  function changePage(page) {
    currentPage = page;
  }

  function showPickedBalls() {
    pickedBalls = allBalls.filter((ball) =>{
      return !unpickedballs.includes(ball)
    })
    changePage('ballview');
  }

  // ***GAME SETUP***
  let allBalls = Array.from({ length: 75 }, (_, i) => i + 1);
  let unpickedballs = [...allBalls]
  let pickedBalls = [];
  let currentBall;

  // ***NEW GAME***
  function newGame() {
    unpickedballs = [...allBalls]
    currentBall = undefined
  }

  // ***GAME PLAY***
  function nextBall(event) {
    let randomNumber = Math.floor(Math.random() * (unpickedballs.length-1 + 1))
    currentBall = unpickedballs[randomNumber]
    unpickedballs.splice(randomNumber,1)
  }  
</script>

<main>
  Bingo Caller
  {#if currentPage == 'main'}
    <Main {currentBall} {unpickedballs} {newGame} {nextBall} {showPickedBalls} showSettings={()=>changePage('settings')}/>
  {:else if currentPage == 'ballview'}
    <PickedBalls {allBalls} {pickedBalls} on:click={()=>changePage('main')}/>
  {:else if currentPage == 'settings'}
    <Settings on:click={()=>changePage('main')} />
  {/if}
</main>

<style>
  main {
    font-weight: bold;
    width: 1700px;
    display: grid;
    grid-template-rows:40px 750px 100px;
    justify-items: center;
    align-items: center;
  }
</style>
