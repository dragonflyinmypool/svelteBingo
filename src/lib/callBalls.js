export function callBall(currentBall, currentLetter, settings) {
  let audio = new Audio();
  let timing = 0;

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
    if (currentLetter !== "false") {
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

  executeQueOfCalls();

  // GO through the call list, send to the timer
  function executeQueOfCalls() {
    for (var i = 0; i < callList.length; i++) {
      sendTheCallsWith(callList[i]);
    }
  }

  // Send the calls to the caller with a timer
  function sendTheCallsWith(call) {
    setTimeout(() => {
      theCaller(call[0], call[1]);
    }, timing);
    timing = timing + 2000;
  }

  //Call the calls
  function theCaller(whatToSay, lang) {
    audio.src = "/assets/" + lang + "/" + whatToSay + ".ogg";
    audio.play();
  }
}
