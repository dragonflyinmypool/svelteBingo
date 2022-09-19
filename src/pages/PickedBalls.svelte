<script>
  import PickedBallDisplay from "../components/PickedBallDisplay.svelte";
  export let pickedBalls;
  export let allBalls;
</script>

<PickedBallDisplay {allBalls} {pickedBalls} />
<button on:click id="button">Back</button>

<style>
  button {
    margin-top: 10px;
    width: 370px;
  }
</style>