<script>
  import MenuButton from "../components/MenuButton.svelte";
 
  export let currentBall
  export let unpickedballs
  export let newGame
  export let nextBall
  export let showPickedBalls
  export let showSettings
  export let repeatCall
  export let settings
</script>

<div id="menuBar">
  <MenuButton on:click={newGame} message='New Game' reference='newGameButton'/>
  <MenuButton on:click={repeatCall} message='Reapeat Ball' reference='repeatBall'/>

  {#if unpickedballs.length > 0}
    <MenuButton on:click={nextBall} message='Next Ball' reference='nextBall' />
  {/if}

  {#if !settings.showNumbers}
  <MenuButton on:click={showPickedBalls} message='Show picked balls' reference='pickedBallsButton'/>
  {/if}

  <MenuButton on:click={showSettings} message='Settings' reference='settingsButton'/>
</div>

<style>
 MenuButton {
    margin: 10px 100px;
  }
</style>