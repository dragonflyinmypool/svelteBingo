<script>
  import BallDisplay from "../components/BallDisplay.svelte";
  import MenuButton from "../components/MenuButton.svelte";

  export let currentBall
  export let unpickedballs
  export let newGame
  export let nextBall
  export let showSettings
  export let allBalls
  export let pickedBalls
  export let repeatCall
</script>


<div id="mainContent">
  
  <BallDisplay {currentBall} />
  
  <!-- ALL BALLS -->
  <div id="ballContainer">
    {#each allBalls as ball}
      <div class="ball {pickedBalls.includes(ball) ? 'active' : 'inactive'}">
          <span class="ballNumber ">{ball}</span>    
      </div>
    {/each}
  </div>

</div>


<div id="menuBar">
  <MenuButton on:click={newGame} message='New Game' reference='newGameButton'/>
  <MenuButton on:click={repeatCall} message='Reapeat Ball' reference='repeatBall'/>

  {#if unpickedballs.length > 0}
    <MenuButton on:click={nextBall} message='Next Ball' reference='nextBall' />
  {/if}
  <MenuButton on:click={showSettings} message='Settings' reference='settingsButton'/>
</div>

<style>
  #mainContent {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  #ballContainer {
    display: grid;
    grid-template-columns: repeat(10, 90px);
    grid-template-rows: repeat(8, 80px);
    justify-items: center;
    align-items: center;

  }
  .ball {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: inline-block;
  }

  .inactive{
    background: grey;
    color:grey;
  }

  .active {
    background: #fbe3ff;
    color:#0f1152;
  }

  .ballNumber {
    width: 70px;
    height: 70px;
    font-size: 50px;
    text-align: center;
    line-height: 70px;
  }
  button {
    margin-top: 10px;
    width: 370px;
  }
</style>