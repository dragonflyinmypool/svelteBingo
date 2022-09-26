<script>
  export let pickedBalls;
  export let allBalls;
</script>

<div id="ballContainer">
  {#each allBalls as ball}
    <div class="ball {pickedBalls.includes(ball) ? 'active' : 'inactive'}">
        <span class="ballNumber ">{ball}</span>    
    </div>
  {/each}
</div>

<style>
  #ballContainer {
    display: grid;
    grid-template-columns: repeat(10, 90px);
    grid-template-rows: repeat(10, 80px);
    justify-items: center;
    align-items: center;

  }
  .ball {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: inline-block;
  }
 
  .ballNumber {
    width: 70px;
    height: 70px;
    font-size: 50px;
    text-align: center;
    line-height: 70px;
  }
</style>