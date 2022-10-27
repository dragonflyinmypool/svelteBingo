import { writable } from "svelte/store";

export const setting = writable({
  showPickedBalls: true,
  numberOfBalls: 75,
  repeatCall: false,
  lang1: "None",
  lang2: "None",
  lang3: "None",
});
