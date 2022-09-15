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
    width: 300px;
    height: 300px;
    background: #fbe3ff;
    color:#0f1152;
    border-radius: 50%;
    display: inline-block;
  }
  #ballNumber {
    position: relative;
    top: 140px;
    font-size: 220px;
    text-align: center;
  }
</style>
