<script>
  import MenuBar from "../components/MenuBar.svelte";
  export let unpickedballs;
  export let settings;
</script>

<main>
  <slot name="center" />
  {#if settings.showNumberOnMain}
    <slot name="center2" />
  {/if}
</main>

<MenuBar
  {unpickedballs}
  {settings}
  on:newGame
  on:repeatBall
  on:nextBall
  on:showBalls
  on:showSettings
/>

<style>
  main {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }
</style>
