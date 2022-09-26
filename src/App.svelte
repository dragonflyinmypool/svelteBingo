<script>
  // ***SETTINGS***
  let settings = {
    showNumberOnMain: true,
    showNumbers: false,
    ballNumbers: [30, 75, 80, 90, 100],
    numberOfBalls: 75,
    showLetter: true,
    repeatCall: false,
    languagesAvailable: [
      "None",
      "Chinese",
      "English",
      "French",
      "German",
      "Spanish",
      "Italian",
    ],
    lang1: "None",
    lang2: "None",
    lang3: "None",
  };

  // ***PAGES***
  import MainWithout from "./pages/MainWithout.svelte";
  import MainTogether from "./pages/MainTogether.svelte";
  import Settings from "./pages/Settings.svelte";
  import PickedBalls from "./pages/PickedBalls.svelte";

  let currentPage = "MainTogether";

  function changePage(page) {
    if (page == "main" && !settings.showNumberOnMain) {
      page = "MainWithout";
    } else if (page == "main" && settings.showNumberOnMain) {
      page = "MainTogether";
    }
    currentPage = page;
  }

  // ***GAME SETUP***
  let allBalls;
  let pickedBalls;
  let currentBall;
  let unpickedballs;
  let currentLetter = "false";

  newGame();

  // ***NEW GAME***
  function newGame() {
    allBalls = Array.from({ length: settings.numberOfBalls }, (_, i) => i + 1);
    unpickedballs = [...allBalls];
    currentBall = undefined;
    pickedBalls = [];
  }

  // ***GAME PLAY***
  function nextBall(event) {
    let randomNumber = Math.floor(
      Math.random() * (unpickedballs.length - 1 + 1)
    );
    currentBall = unpickedballs[randomNumber];
    unpickedballs.splice(randomNumber, 1);

    pickedBalls = allBalls.filter((ball) => {
      return !unpickedballs.includes(ball);
    });

    function sendLetter() {
      if (settings.numberOfBalls == 75) {
        return addLetter(currentBall);
      } else {
        return "false";
      }
    }
    currentLetter = sendLetter();

    callBall(currentBall, currentLetter);
  }

  function addLetter(currentBall) {
    let withLetter;

    switch (true) {
      case currentBall == undefined:
        withLetter = "";
        break;
      case currentBall <= 15:
        withLetter = "B";
        break;
      case currentBall <= 30:
        withLetter = "I";
        break;
      case currentBall <= 45:
        withLetter = "N";
        break;
      case currentBall <= 60:
        withLetter = "G";
        break;
      default:
        withLetter = "O";
    }
    return withLetter;
  }

  function repeatCall() {
    callBall(currentBall, currentLetter);
  }

  //
  // CALL BALLS
  //
  function callBall(currentBall, currentLetter) {
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
</script>

<main>
  {#if currentPage == "MainWithout"}
    <MainWithout
      {currentBall}
      {unpickedballs}
      {newGame}
      {nextBall}
      {repeatCall}
      {settings}
      {currentLetter}
      showPickedBalls={() => changePage("ballview")}
      showSettings={() => changePage("settings")}
    />
  {:else if currentPage == "MainTogether"}
    <MainTogether
      {currentLetter}
      {allBalls}
      {pickedBalls}
      {currentBall}
      {unpickedballs}
      {newGame}
      {nextBall}
      {repeatCall}
      {settings}
      showPickedBalls={() => changePage("ballview")}
      showSettings={() => changePage("settings")}
    />
  {:else if currentPage == "ballview"}
    <PickedBalls {allBalls} {pickedBalls} on:click={() => changePage("main")} />
  {:else if currentPage == "settings"}
    <Settings {settings} {newGame} on:click={() => changePage("main")} />
  {/if}
</main>

<style>
  main {
    font-weight: bold;
    width: 1800px;
    display: grid;
    grid-template-rows: 875px 125px;
    justify-items: center;
    align-items: center;
  }
</style>
