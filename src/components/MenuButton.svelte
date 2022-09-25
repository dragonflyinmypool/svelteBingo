<script>
  export let reference;
  export let focus = false;
  var buttons = document.getElementsByTagName('button');
  
  import { onMount } from 'svelte'
  let defaultButton
  if (focus == 'true') {
    onMount(() => defaultButton.focus())
  }
</script>

<button bind:this={defaultButton} on:click id={reference}><slot></slot></button>

<style>
  button {
    margin: 0px 10px;
    width: 200px;
  }
</style>
