<script>
  export let showPickedBalls = true;
</script>

<div id="mainContent">
  <slot name="1" id="one" />
  {#if showPickedBalls}
    <slot name="2" id="two" />
  {/if}
</div>
<div id="menu">
  <slot name="menu" id="three" />
</div>

<style>
  #mainContent {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    height: 800px;
    gap: 50px;
  }
  #menu {
    margin-top: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
