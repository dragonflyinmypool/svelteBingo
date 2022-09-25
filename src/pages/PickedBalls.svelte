<script>
  import PickedBallDisplay from "../components/PickedBallDisplay.svelte";
  import MenuButton from "../components/MenuButton.svelte";

  export let pickedBalls;
  export let allBalls;
</script>

<PickedBallDisplay {allBalls} {pickedBalls} />
<!-- <button bind:this={defaultButton} on:click id="button">Back</button>
 -->
<MenuButton on:click reference='nextBall' focus=true>Back</MenuButton>

<style>
  button {
    margin-top: 10px;
    width: 370px;
  }
</style>