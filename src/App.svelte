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
  {#if !showBalls}
  <BallDisplay {currentBall} />
    <div id="menuBar">
      {#if unpickedballs.length > 0}
        <MenuButton on:click={handleMessage} message='Next Ball'/>
      {/if}
      <MenuButton on:click={showPickedBalls} message='Show picked balls'/>
      <MenuButton on:click={newGame} message='New Game'/>
      <MenuButton on:click={showSettings} message='Settings'/>
    </div>
  {/if}

  {#if showBalls}
  <PickedBallsDisplay {pickedBalls} on:click={hideBalls}/>
  {/if}
</main>

<style>
  main {
    font-weight: bold;
    width: 1000px;
  }
  #MenuBar {
    display: flex;
  }
</style>
