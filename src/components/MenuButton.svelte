<script>
  // import on mount
  import { onMount } from "svelte";
  export let focus = "false";
  export let large = "";

  // on mount
  onMount(() => {
    if (focus === "true") {
      let element = document.getElementById("true");
      element.focus();
    }
  });
</script>

<button on:click id={focus} class={large}>
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
  .large {
    width: 300px;
    height: 80px;
    font-size: 40px;
    line-height: 40px;
  }
</style>
