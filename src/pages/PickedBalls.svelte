<script>
  export let pickedBalls;
  export let allBalls;
</script>

<!--  -->
<div id="ballContainer">
  {#each allBalls as ball}
    <div class="ball {pickedBalls.includes(ball) ? 'active' : 'inactive'}">
        <span class="ballNumber ">{ball}</span>    
    </div>
  {/each}
</div>
<button on:click id="button">Back</button>

<style>
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