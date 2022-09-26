<script>
  export let focus = "false";
  import { onMount } from "svelte";

  let defaultButton;

  if (focus == "true") {
    onMount(() => defaultButton.focus());
  }
</script>

<button bind:this={defaultButton} on:click>
  <slot />
</button>

<style>
  button {
    margin: 0px 10px;
    width: 200px;
  }
</style>
