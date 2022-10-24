<script>
  import { createEventDispatcher } from "svelte";
  import MenuButton from "../components/MenuButton.svelte";

  export let unpickedballs;
  export let settings;
  export let showGetOldState;

  const dispatcher = createEventDispatcher();
  console.log(unpickedballs);
</script>

<div id="menuBar">
  <MenuButton on:click={() => dispatcher("newGame")}>New Game</MenuButton>
  <MenuButton on:click={() => dispatcher("repeatBall")}>Reapeat Ball</MenuButton
  >

  {#if unpickedballs.length > 0}
    <MenuButton on:click={() => dispatcher("nextBall")}>Next Ball</MenuButton>
  {/if}

  {#if !settings.showNumberOnMain}
    <MenuButton on:click={() => dispatcher("showBalls")}
      >Show Picked Balls</MenuButton
    >
  {/if}

  <MenuButton on:click={() => dispatcher("showSettings")}>Settings</MenuButton>
  {#if showGetOldState}
    <MenuButton on:click={() => dispatcher("getOldState")}>
      Get Old State
    </MenuButton>
  {/if}
</div>
