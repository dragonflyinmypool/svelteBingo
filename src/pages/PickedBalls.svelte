<script>
  import PickedBallDisplay from "../components/PickedBallDisplay.svelte";
  export let pickedBalls;
  export let allBalls;

  import { onMount } from 'svelte'
  let defaultButton
  onMount(() => defaultButton.focus())
</script>

<PickedBallDisplay {allBalls} {pickedBalls} />
<button bind:this={defaultButton} on:click id="button">Back</button>

<style>
  button {
    margin-top: 10px;
    width: 370px;
  }
</style>