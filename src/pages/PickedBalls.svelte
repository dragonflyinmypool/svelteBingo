<script>
  import PickedBallDisplay from "../components/PickedBallDisplay.svelte";
  import MenuButton from "../components/MenuButton.svelte";

  export let pickedBalls;
  export let allBalls;
</script>

<PickedBallDisplay {allBalls} {pickedBalls} />
<MenuButton on:click focus="true">Back</MenuButton>
