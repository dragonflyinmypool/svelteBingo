<script>
  // Template
  import Template from "../templates/Template.svelte";
  // Components
  import MenuButton from "../components/MenuButton.svelte";
  import SelectDropDown from "../components/SelectDropDown.svelte";
  import CheckB from "../components/CheckB.svelte";

  // Stores
  import { setting } from "../stores/settingsStore.js";
  // Event dispatcher
  import { createEventDispatcher } from "svelte";
  const dispatcher = createEventDispatcher();

  let possibleSettings = {
    ballNumbers: [30, 75, 80, 90, 100],
    languagesAvailable: [
      "None",
      "Chinese",
      "English",
      "French",
      "German",
      "Spanish",
      "Italian",
    ],
  };
</script>

<Template>
  <div slot="1" class="column">
    <span>Ball Numbers</span>
    <SelectDropDown
      bind:currentSetting={$setting.numberOfBalls}
      possibleSettings={possibleSettings.ballNumbers}
    />
    <span>Show called balls on main screen </span>
    <CheckB bind:currentSetting={$setting.showPickedBalls} />
  </div>

  <div slot="2" class="column">
    <span>Voice caller 1</span>
    <SelectDropDown
      bind:currentSetting={$setting.lang1}
      possibleSettings={possibleSettings.languagesAvailable}
    />
    <span>Voice caller 2 </span>
    <SelectDropDown
      bind:currentSetting={$setting.lang2}
      possibleSettings={possibleSettings.languagesAvailable}
    />
    <span>Voice caller 3</span>
    <SelectDropDown
      bind:currentSetting={$setting.lang3}
      possibleSettings={possibleSettings.languagesAvailable}
    />
    <span>Repeat Call </span>
    <CheckB bind:currentSetting={$setting.repeatCall} />
  </div>
  <MenuButton slot="menu" on:click={() => dispatcher("back")}>Back</MenuButton>
</Template>

<style>
  .column {
    display: grid;
    grid-template-columns: 300px 300px;
    grid-template-rows: repeat(4, 125px);
    grid-gap: 10px;
    justify-content: center;
    align-items: center;
  }
  span {
    font-size: 40px;
  }
</style>
