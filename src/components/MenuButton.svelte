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
    font-size: 20px;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    background-color: blue;
    border: none;
    cursor: pointer;
  }
</style>
