<script>
  import BallDisplay from "../components/BallDisplay.svelte";
  import MenuBar from "../components/MenuBar.svelte";

  export let currentBall;
  export let currentLetter;
  export let unpickedballs;
  export let settings;
</script>

<BallDisplay {currentBall} {currentLetter} {settings} />
<MenuBar
  {unpickedballs}
  {settings}
  on:newGame
  on:repeatBall
  on:nextBall
  on:showBalls
  on:showSettings
/>
