<script>
  export let currentBall;
  export let currentLetter;
  export let settings;
</script>

<div id="ball">
  {#if currentBall}
    <span id="ballNumber">
      {#if currentLetter !== 'false'}
        <span class="letter" style="color:#5800ff"> {currentLetter}</span>
      {/if}
      {currentBall}
    </span>
  {/if}
</div>

<style>
  span.letter {
    color: #5800ff;
  }
  #ball {
    width: 700px;
    height: 700px;
    background: #fbe3ff;
    color:#0f1152;
    border-radius: 50%;
    display: inline-block;
  }
  #ballNumber {
    position: relative;
    top: 350px;
    font-size: 370px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
