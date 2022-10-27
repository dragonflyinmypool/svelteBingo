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
    margin: 0px 15px;
    width: 210px;
    height: 60px;
    font-size: 20px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }
</style>
