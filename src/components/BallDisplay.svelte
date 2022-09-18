<script>
  export let currentBall;
</script>

<div id="ball">
  <span id="ballNumber">
    {#if currentBall}
      {currentBall}
    {/if}
  </span>
</div>

<style>
  #ball {
    width: 500px;
    height: 500px;
    background: #fbe3ff;
    color:#0f1152;
    border-radius: 50%;
    display: inline-block;
  }
  #ballNumber {
    position: relative;
    top: 240px;
    font-size: 380px;
    text-align: center;
  }
</style>
