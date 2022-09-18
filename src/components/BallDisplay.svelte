<script>
  export let currentBall;

  $: displayThis = addLetter(currentBall)

  function addLetter(currentBall) {
    let withLetter

    switch (true) {
      case currentBall == undefined:
        withLetter = "";
        break; 
      case currentBall <= 15:
        withLetter = "B" + currentBall;
        break;
      case currentBall <= 30:
        withLetter = "I" + currentBall;
        break;
      case currentBall <= 45:
        withLetter = "N" + currentBall;
        break;
      case currentBall <= 60:
        withLetter = "G" + currentBall;
        break;  
      default:
      withLetter = "O" + currentBall;
  } 

    return withLetter
  }
</script>

<div id="ball">
  <span id="ballNumber">
    {#if displayThis}
      {displayThis}
    {/if}
  </span>
</div>

<style>
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
