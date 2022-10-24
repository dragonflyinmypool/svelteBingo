<script>
  import MenuButton from "../components/MenuButton.svelte";
  import DisplayAllBalls from "../components/DisplayAllBalls.svelte";

  import { createEventDispatcher } from "svelte";
  const dispatcher = createEventDispatcher();

  export let gameState;
</script>

<div>
  <main>
    <DisplayAllBalls
      unpickedBalls={gameState.unpickedBalls}
      pickedBalls={gameState.pickedBalls}
    />
  </main>
  <section>
    <MenuButton on:click={() => dispatcher("back")}>Back</MenuButton>
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
