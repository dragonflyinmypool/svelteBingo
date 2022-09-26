<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();

  export let currentSetting;
  export let label;
  export let gridLabel;
  export let gridButton;
  export let settingToBeChanged;
  export let startNewGame;

  function changeSettings(e) {
    let newSettingObject = {
      setting: settingToBeChanged,
      value: e.target.checked,
      newGame: startNewGame,
    };
    dispatch("changeSettings", newSettingObject);
  }
</script>

<label style:grid-area={gridLabel} id="label" for="checkbox">
  <span>{label}</span>
</label>

<input
  value="checkbox"
  style:grid-area={gridButton}
  type="checkbox"
  checked={currentSetting}
  on:click={changeSettings}
/>

<style>
  input {
    height: 100px !important;
    width: 100px !important;
    background: black;
  }
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 50px;
  }
</style>
