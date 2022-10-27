<script>
  export let currentSetting;
  export let possibleSettings;
</script>

<select bind:value={currentSetting}>
  {#each possibleSettings as number}
    <option value={number}>{number}</option>
  {/each}
</select>

<style>
  select {
    width: 250px;
    font-size: 40px;
  }
</style>
