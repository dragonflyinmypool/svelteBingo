<script>
  import { createEventDispatcher } from "svelte";
  import MenuButton from "../components/MenuButton.svelte";

  export let unpickedballs;
  export let settings;

  const dispatcher = createEventDispatcher();
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
</div>
