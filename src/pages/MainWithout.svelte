<script>
  import BallDisplay from "../components/BallDisplay.svelte";
  import MenuBar from "../components/MenuBar.svelte";
  export let currentBall;
  export let unpickedballs;
  export let newGame;
  export let nextBall;
  export let showPickedBalls;
  export let showSettings;
  export let repeatCall;
  export let settings;
  export let currentLetter;
</script>

<BallDisplay {currentBall} {currentLetter} {settings} />

<MenuBar
  {unpickedballs}
  {newGame}
  {nextBall}
  {repeatCall}
  {showPickedBalls}
  {showSettings}
  {settings}
/>
