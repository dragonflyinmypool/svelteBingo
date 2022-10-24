<script>
  import BallDisplay from "../components/BallDisplay.svelte";
  import MenuBar from "../components/MenuBar.svelte";

  export let currentBall;
  export let currentLetter;
  export let unpickedballs;
  export let settings;
  export let showGetOldState;
</script>

<BallDisplay {currentBall} {currentLetter} {settings} />
<MenuBar
  {unpickedballs}
  {settings}
  {showGetOldState}
  on:newGame
  on:repeatBall
  on:nextBall
  on:showBalls
  on:showSettings
  on:getOldState
/>
