<script>
  export let showPickedBalls = true;
</script>

<header id="header"><slot name="header" /></header>
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
  #header {
    font-size: 20px;
    padding: 0px 0px 10px 0px;
  }
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
