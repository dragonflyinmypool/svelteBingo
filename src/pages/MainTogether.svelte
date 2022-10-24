<script>
  import BallDisplay from "../components/BallDisplay.svelte";
  import PickedBallDisplay from "../components/PickedBallDisplay.svelte";
  import MenuBar from "../components/MenuBar.svelte";

  export let currentBall;
  export let currentLetter;
  export let pickedBalls;
  export let unpickedballs;
  export let allBalls;
  export let settings;
  export let showGetOldState;
  console.log(unpickedballs);
</script>

<div id="mainContent">
  <BallDisplay {currentBall} {currentLetter} {settings} />
  <PickedBallDisplay {allBalls} {pickedBalls} />
</div>

<MenuBar
  {unpickedballs}
  {settings}
  on:newGame
  on:repeatBall
  on:nextBall
  on:showBalls
  on:showSettings
  on:getOldState
  {showGetOldState}
/>

<style>
  #mainContent {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
</style>
