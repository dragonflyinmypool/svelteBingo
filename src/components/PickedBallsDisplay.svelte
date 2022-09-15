<script>
  export let pickedBalls;
</script>

<div id="ballContainer">
  {#each pickedBalls as ball}
    <div class="ball">
      <span class="ballNumber">{ball}</span>
    </div>
  {/each}
</div>
<br>
<button on:click>Back</button>

<style>
  #ballContainer {
    display: grid;
    grid-template-columns: repeat(8, 90px);
    grid-template-rows: repeat(5, 90px);

  }
  .ball {
    width: 70px;
    height: 70px;
    background: #fbe3ff;
    color:#0f1152;
    border-radius: 50%;
    display: inline-block;
  }
  .ballNumber {
    width: 70px;
    height: 70px;
    font-size: 40px;
    text-align: center;
    line-height: 70px;
  }
</style>