<script>
  export let currentSetting;
</script>

<input type="checkbox" bind:checked={currentSetting} />

<style>
  input {
    height: 100px !important;
    width: 100px !important;
    background: black;
  }
</style>
