<script>
  // Template
  import Template from "../templates/Template.svelte";

  // Components
  import MenuButton from "../components/MenuButton.svelte";
  import DisplayAllBalls from "../components/DisplayAllBalls.svelte";

  import { createEventDispatcher } from "svelte";
  const dispatcher = createEventDispatcher();

  export let gameState;
</script>

<Template>
  <DisplayAllBalls
    slot="1"
    unpickedBalls={gameState.unpickedBalls}
    pickedBalls={gameState.pickedBalls}
  />
  <MenuButton slot="menu" on:click={() => dispatcher("back")}>Back</MenuButton>
</Template>
