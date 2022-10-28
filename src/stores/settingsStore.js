import { writable } from "svelte/store";

const defaultSettings = {
  showPickedBalls: true,
  numberOfBalls: 75,
  repeatCall: false,
  lang1: "None",
  lang2: "None",
  lang3: "None",
};

// Check local storage for settings
const storedSettings = JSON.parse(localStorage.getItem("settings"));
export const setting = writable(storedSettings || defaultSettings);

// Save settings to local storage
setting.subscribe((value) => {
  localStorage.setItem("settings", JSON.stringify(value));
});
