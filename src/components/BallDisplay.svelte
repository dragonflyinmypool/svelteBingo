<script>
  export let currentBall;
  export let currentLetter;
  export let settings;
</script>

<div id="ball">
  {#if currentBall && currentLetter !== 'false'}
    <span id="verticalBall">
       <div><span class="letter letterVertical"> {currentLetter}</span></div>
      <div>{currentBall}</div>
    </span>

    {:else if currentBall && currentLetter == 'false'}
    <span id="ballNumber">
      <div>{currentBall}</div>
    </span>
  {/if}
</div>

<style>
  #ball {
    width: 800px;
    height: 800px;
    border-radius: 50%;
    display: inline-block;
  }
  #verticalBall {
    position: relative;
    top: 75px;
    font-size: 500px;
    display: grid;
    grid-template-rows: 400px
  }
  .letterVertical{
    font-size: 250px;
  }

  #ballNumber {
    position: relative;
    top: 400px;
    font-size: 475px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
