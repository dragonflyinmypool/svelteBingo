<script>
  export let unpickedBalls;
  export let pickedBalls;

  // Combined array of picked and unpicked balls
  $: allBalls = [...pickedBalls, ...unpickedBalls];
  // Sort the balls by number
  $: allBalls.sort((a, b) => a.number - b.number);
</script>

<!-- display allBalls -->
<div class="balls">
  {#each allBalls as ball}
    <div class="ball {ball.picked ? 'picked' : 'notpicked'}">
      <div class="ball-number ">
        {ball.number}
      </div>
    </div>
  {/each}
</div>

<style>
  .balls {
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
    font-size: 50px;
    line-height: 70px;
    font-weight: 700;
    display: inline-block;
    background: grey;
    color: grey;
  }
  .picked {
    background: #fbe3ff;
    color: #0f1152;
  }
</style>
