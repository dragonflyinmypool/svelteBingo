<script>
  export let unpickedBalls;
  export let pickedBalls;

  // combined array of picked and unpicked balls
  $: allBalls = [...pickedBalls, ...unpickedBalls];
  // sort the balls by number
  $: allBalls.sort((a, b) => a.number - b.number);
</script>

<!-- display allBalls -->
<div id="container">
  <div class="balls">
    {#each allBalls as ball}
      <div class="ball {ball.picked ? 'picked' : 'notpicked'}">
        <div class="ball-number ">
          {ball.number}
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  #container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    height: 700px;
  }
  /* create rows of 10 balls */
  .balls {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-gap: 10px;
    max-width: 700px;
  }
  .ball {
    border-radius: 50%;
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: gray;
  }
  .picked {
    color: white;
    background-color: blue;
  }
</style>
