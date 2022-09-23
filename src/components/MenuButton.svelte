<script>
  export let message;
  export let reference;
  export let focus;
  var buttons = document.getElementsByTagName('button');
  
  import { onMount } from 'svelte'
  let defaultButton
  if (focus == 'true') {
  console.log(reference)  
    onMount(() => defaultButton.focus())
  }
</script>

<button bind:this={defaultButton} on:click id={reference}>{message}</button>

<style>
  button {
    margin: 0px 10px;
    width: 200px;
  }
</style>
