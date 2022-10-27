<script>
  // Template
  import Template from "../templates/Template.svelte";

  // Components
  import MenuButton from "../components/MenuButton.svelte";

  import { createEventDispatcher } from "svelte";
  const dispatcher = createEventDispatcher();

  let possibleSettings = {
    ballNumbers: [30, 75, 80, 90, 100],
    languagesAvailable: [
      "None",
      "Chinese",
      "English",
      "French",
      "German",
      "Spanish",
      "Italian",
    ],
  };
</script>

<Template>
  <MenuButton slot="menu" on:click={() => dispatcher("back")}>Back</MenuButton>
</Template>
