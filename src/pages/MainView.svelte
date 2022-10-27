<script>
  // Template
  import Template from "../templates/Template.svelte";

  // Components
  import CurrentBall from "../components/CurrentBall.svelte";
  import Menu from "../components/Menu.svelte";
  import DisplayAllBalls from "../components/DisplayAllBalls.svelte";

  export let gameState;
</script>

<Template>
  <CurrentBall
    slot="1"
    currentBall={gameState.pickedBalls[gameState.pickedBalls.length - 1]}
  />
  <DisplayAllBalls
    slot="2"
    unpickedBalls={gameState.unpickedBalls}
    pickedBalls={gameState.pickedBalls}
  />
  <Menu slot="menu" on:newGame on:nextBall on:showPickedBalls on:showSettings />
</Template>
