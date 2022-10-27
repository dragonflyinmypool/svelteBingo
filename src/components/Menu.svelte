<script>
  import MenuButton from "../components/MenuButton.svelte";

  import { createEventDispatcher } from "svelte";
  const dispatcher = createEventDispatcher();
</script>

<MenuButton on:click={() => dispatcher("newGame")}>New Game</MenuButton>
<MenuButton on:click={() => dispatcher("reapeatBall")}>Repeat Ball</MenuButton>
<MenuButton on:click={() => dispatcher("nextBall")}>Next Ball</MenuButton>
<MenuButton on:click={() => dispatcher("showPickedBalls")}
  >Show Picked Balls</MenuButton
>
<MenuButton on:click={() => dispatcher("showSettings")}>Settings</MenuButton>
