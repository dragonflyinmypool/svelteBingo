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
  <MenuButton on:click={newGame} message='New Game' reference='newGameButton' focus='false' />
  <MenuButton on:click={repeatCall} message='Reapeat Ball' reference='repeatBall' focus='false' />

  {#if unpickedballs.length > 0}
    <MenuButton  on:click={nextBall} message='Next Ball' reference='nextBall' focus='true' />
  {/if}

  {#if !settings.showNumberOnMain}
  <MenuButton on:click={showPickedBalls} message='Show picked balls' reference='pickedBallsButton' focus= 'false' />
  {/if}

  <MenuButton on:click={showSettings} message='Settings' reference='settingsButton' focus= 'false' />
</div>

<style>
 MenuButton {
    margin: 10px 100px;
  }
</style>