<script>
  export let currentBall;
</script>

<!-- display current ball -->
<div id="ball">
  {#if currentBall}
    <div id="ball-letter">{currentBall.letter}</div>
    <div id="ball-number">{currentBall.number}</div>
  {/if}
</div>

<style>
  /* Create a bingo ball */
  #ball {
    width: 800px;
    height: 800px;
    border-radius: 50%;
    background-color: blue;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 250px;
    font-weight: bold;
  }
</style>
