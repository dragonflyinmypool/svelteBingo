<script>
export let displayThis;
export let settings;


  
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
