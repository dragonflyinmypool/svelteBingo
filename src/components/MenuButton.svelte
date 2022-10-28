<script>
  // import on mount
  import { onMount } from "svelte";
  export let focus = "false";

  // on mount
  onMount(() => {
    if (focus === "true") {
      let element = document.getElementById("true");
      element.focus();
      console.log(element, focus);
    }
  });
</script>

<button on:click id={focus}>
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
