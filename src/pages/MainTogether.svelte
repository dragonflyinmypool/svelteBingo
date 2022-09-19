<script>
  import BallDisplay from "../components/BallDisplay.svelte";
  import PickedBallDisplay from "../components/PickedBallDisplay.svelte";
  import MenuBar from "../components/MenuBar.svelte";
  
  export let currentBall
  export let unpickedballs
  export let newGame
  export let nextBall
  export let showSettings
  export let allBalls
  export let pickedBalls
  export let repeatCall
  export let settings
  export let showPickedBalls
</script>

<div id="mainContent">
  <BallDisplay {currentBall} {settings}/>
  <PickedBallDisplay {allBalls} {pickedBalls} />
</div>

<MenuBar 
  {currentBall} 
  {unpickedballs} 
  {newGame} 
  {nextBall}
  {repeatCall}
  {showPickedBalls}
  {showSettings}
  {settings}
/>

<style>
  #mainContent {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
</style>