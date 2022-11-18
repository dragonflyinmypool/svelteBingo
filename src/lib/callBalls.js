import { Howl, Howler } from "howler";

export function callBall(currentBall, currentLetter, settings) {
  let timing = 0;
  let callListIndex = 0;

  // Make an array with all the languages to be called
  function checkSettings() {
    let arrayOfLanguages = [];
    if (settings.lang1 !== "None") {
      arrayOfLanguages.push(settings.lang1);
    }
    if (settings.lang2 !== "None") {
      arrayOfLanguages.push(settings.lang2);
    }
    if (settings.lang3 !== "None") {
      arrayOfLanguages.push(settings.lang3);
    }
    return arrayOfLanguages;
  }
  let arrayOfLanguages = checkSettings();

  // Create a que of all calls to be said including: whatToSay and lang
  // [[whatToSay, lang],[whatToSay, lang],[whatToSay, lang]]
  let callList = [];

  for (var i = 0; i < arrayOfLanguages.length; i++) {
    if (currentLetter) {
      callList.push([currentLetter, arrayOfLanguages[i]]);
    }
    callList.push([currentBall, arrayOfLanguages[i]]);

    if (settings.repeatCall) {
      if (currentLetter !== "false") {
        callList.push([currentLetter, arrayOfLanguages[i]]);
      }
      callList.push([currentBall, arrayOfLanguages[i]]);
    }
  }

  console.log(callList);
  // GO through the call list, send to the timer
  function callNext() {
    if (callListIndex < callList.length) {
      let whatToSay = callList[callListIndex][0];
      let lang = callList[callListIndex][1];
      callListIndex++;
      call(whatToSay, lang);
    }
  }

  // Call the audio file
  function call(whatToSay, lang) {
    console.log(whatToSay, lang);
    let audio = new Howl({
      src: [`./assets/${lang}/${whatToSay}.ogg`],
      onend: function () {
        setTimeout(() => {
          callNext();
        }, 1500);
      },
    });
    audio.play();
  }

  callNext();
}
