<script>
  import { setting } from "../stores/settingsStore.js";

  import MenuButton from "../components/MenuButton.svelte";

  import { createEventDispatcher } from "svelte";
  const dispatcher = createEventDispatcher();
</script>

<div id="menu">
  <span id="alignRight">
    <MenuButton on:click={() => dispatcher("newGame")}>New Game</MenuButton>
  </span>
  <span id="center">
    <MenuButton
      on:click={() => dispatcher("nextBall")}
      focus="true"
      large="large">Next Ball</MenuButton
    >
  </span>
  <span id="alignLeft">
    <MenuButton on:click={() => dispatcher("showSettings")}>Settings</MenuButton
    >
    {#if !($setting.lang1 == "None" && $setting.lang2 == "None" && $setting.lang3 == "None")}
      <MenuButton on:click={() => dispatcher("repeatBall")}
        >Repeat Ball</MenuButton
      >
    {/if}
    {#if !$setting.showPickedBalls}
      <MenuButton on:click={() => dispatcher("showPickedBalls")}
        >Show Picked Balls</MenuButton
      >
    {/if}
  </span>
</div>

<style>
  /* center element with id of center */
  #menu {
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
    height: 100%;
    justify-content: center;
  }

  /* Align menu */
  #alignRight,
  #alignLeft,
  #center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  #alignRight {
    justify-self: end;
  }
  #alignLeft {
    justify-self: start;
  }
</style>
