<script>
  export let currentBall;
  export let settings;

  $: displayThis = settings.numberOfBalls == 75 ? addLetter(currentBall) : currentBall 

  function addLetter(currentBall) {
    let withLetter

    switch (true) {
      case currentBall == undefined:
        withLetter = '';
        break; 
      case currentBall <= 15:
        withLetter = '<span class="letter" style="color:#5800ff">B</span>' + currentBall;
        break;
      case currentBall <= 30:
        withLetter = '<span class="letter" style="color:#5800ff">I</span>' + currentBall;
        break;
      case currentBall <= 45:
        withLetter = '<span class="letter" style="color:#5800ff">N</span>' + currentBall;
        break;
      case currentBall <= 60:
        withLetter ='<span class="letter" style="color:#5800ff">G</span>' + currentBall;
        break;  
      default:
      withLetter = '<span class="letter" style="color:#5800ff">O</span>' + currentBall;
  } 
    return withLetter
  }
</script>

<div id="ball">
  <span id="ballNumber">
    {#if displayThis}
      {@html displayThis}
    {/if}
  </span>
</div>

<style>
  span.letter {
    color: #5800ff;
  }
  #ball {
    width: 600px;
    height: 600px;
    background: #fbe3ff;
    color:#0f1152;
    border-radius: 50%;
    display: inline-block;
  }
  #ballNumber {
    position: relative;
    top: 300px;
    font-size: 300px;
    text-align: center;
  }
  
</style>
