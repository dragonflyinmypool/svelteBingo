<script>
  import { setting } from "../stores/settingsStore.js";

  import MenuButton from "../components/MenuButton.svelte";

  import { createEventDispatcher } from "svelte";
  const dispatcher = createEventDispatcher();
</script>

<MenuButton on:click={() => dispatcher("newGame")}>New Game</MenuButton>

<MenuButton on:click={() => dispatcher("nextBall")} focus="true"
  >Next Ball</MenuButton
>

<MenuButton on:click={() => dispatcher("showSettings")}>Settings</MenuButton>
{#if !($setting.lang1 == "None" && $setting.lang2 == "None" && $setting.lang3 == "None")}
  <MenuButton on:click={() => dispatcher("repeatBall")}>Repeat Ball</MenuButton>
{/if}

{#if !$setting.showPickedBalls}
  <MenuButton on:click={() => dispatcher("showPickedBalls")}
    >Show Picked Balls</MenuButton
  >
{/if}
