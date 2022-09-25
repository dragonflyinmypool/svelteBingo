<script>
  import MenuButton from "../components/MenuButton.svelte";
 
  export let unpickedballs
  export let newGame
  export let nextBall
  export let showPickedBalls
  export let showSettings
  export let repeatCall
  export let settings
</script>

<div id="menuBar">
  <MenuButton on:click={newGame} reference='newGameButton'>New Game</MenuButton>
  <MenuButton on:click={repeatCall} reference='repeatBall'>Reapeat Ball </MenuButton>

  {#if unpickedballs.length > 0}
    <MenuButton  on:click={nextBall} reference='nextBall' focus='true'>Next Ball</MenuButton>
  {/if}

  {#if !settings.showNumberOnMain}
  <MenuButton on:click={showPickedBalls} reference='pickedBallsButton'>Show Picked Balls</MenuButton>
  {/if}

  <MenuButton on:click={showSettings} reference='settingsButton'>Settings </MenuButton>
</div>

<style>
 MenuButton {
    margin: 10px 100px;
  }
</style>