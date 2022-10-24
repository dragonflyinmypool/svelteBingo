<script>
  // Components
  import CurrentBall from "../components/CurrentBall.svelte";
  import Menu from "../components/Menu.svelte";
  import DisplayAllBalls from "../components/DisplayAllBalls.svelte";

  export let gameState;
</script>

<div>
  <main>
    <CurrentBall
      currentBall={gameState.pickedBalls[gameState.pickedBalls.length - 1]}
    />
    <DisplayAllBalls
      unpickedBalls={gameState.unpickedBalls}
      pickedBalls={gameState.pickedBalls}
    />
  </main>
  <section>
    <Menu on:newGame on:nextBall on:showPickedBalls on:showSettings />
  </section>
</div>

<style>
  main {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }
  section {
    margin-top: 80px;
  }
  /* center div elements */
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
