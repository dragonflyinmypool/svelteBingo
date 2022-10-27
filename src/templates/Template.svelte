<div id="mainContent">
  <slot name="1" id="one" />
  <slot name="2" id="two" />
</div>
<div id="menu">
  <slot name="menu" id="three" />
</div>

<style>
  #mainContent {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    height: 800px;
  }
  #menu {
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
