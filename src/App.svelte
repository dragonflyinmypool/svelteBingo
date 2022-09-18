<script>
  import BallDisplay from "./components/BallDisplay.svelte";
  import MenuButton from "./components/MenuButton.svelte";
  import PickedBallsDisplay from "./components/PickedBallsDisplay.svelte";

  let allBalls = Array.from({ length: 75 }, (_, i) => i + 1);
  let unpickedballs = [...allBalls]
  let currentBall;

  function handleMessage(event) {
    let randomNumber = randomIntFromInterval(0,unpickedballs.length-1)
    currentBall = unpickedballs[randomNumber]
    unpickedballs.splice(randomNumber,1)
  }

  function newGame() {
    unpickedballs = [...allBalls]
    currentBall = ''
  }

  let pickedBalls = [];
  let showBalls = false;
  function showPickedBalls() {
    pickedBalls = allBalls.filter((ball) =>{
      return !unpickedballs.includes(ball)
    })
    showBalls = true;
  }
  function hideBalls () {
    showBalls = false;
  }


  function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
  }
  function showSettings(){
    console.log("Settings")
  }


  </script>

<main>
  Bingo Caller
  {#if !showBalls}
    <BallDisplay {currentBall} />

    <div id="menuBar">
      <MenuButton on:click={newGame} message='New Game' reference='newGameButton'/>
      {#if unpickedballs.length > 0}
        <MenuButton on:click={handleMessage} message='Next Ball' reference='nextBall' />
      {/if}
      <MenuButton on:click={showPickedBalls} message='Show picked balls' reference='pickedBallsButton'/>
      
      <MenuButton on:click={showSettings} message='Settings' reference='settingsButton'/>
    </div>
  {/if}

  {#if showBalls}
  <PickedBallsDisplay {allBalls} {pickedBalls} on:click={hideBalls}/>
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
  #MenuBar {
    display: flex;
  }
</style>
