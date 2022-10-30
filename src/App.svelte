<script>
  // Stores
  import { setting } from "./stores/settingsStore.js";
  // lib
  import { callBall } from "./lib/callBalls.js";
  // Pages
  import MainView from "./pages/MainView.svelte";
  import DisplayBalls from "./pages/DisplayBalls.svelte";
  import Settings from "./pages/Settings.svelte";

  // Game state
  let gameState = {
    unpickedBalls: [],
    pickedBalls: [],
  };

  // Check for stored previous game state
  let previousGameState = JSON.parse(localStorage.getItem("gameState"));
  let restorable = previousGameState ? true : false;

  // App state
  let appState = {
    currentPage: "MainView",
    restorable: restorable,
  };

  // *** NEW GAME ***
  // Start a new game
  function newGame() {
    // Clear picked balls
    gameState.pickedBalls = [];
    // Create new ball set
    gameState.unpickedBalls = createBalls($setting.numberOfBalls);
  }

  // Create balls
  function createBalls(numberOfBalls) {
    let balls = [];

    for (let i = 1; i <= numberOfBalls; i++) {
      let ball = {
        number: i,
        letter: addLetter(i),
        picked: false,
      };
      balls.push(ball);
    }

    return balls;
  }

  // Add letter to bingo ball
  function addLetter(ballNumber) {
    if ($setting.numberOfBalls == 75) {
      let letter = "";
      if (ballNumber <= 15) {
        letter = "B";
      } else if (ballNumber <= 30) {
        letter = "I";
      } else if (ballNumber <= 45) {
        letter = "N";
      } else if (ballNumber <= 60) {
        letter = "G";
      } else if (ballNumber <= 75) {
        letter = "O";
      }
      return letter;
    }
  }

  newGame();

  // *** Game Play ***
  // Pick a ball
  function pickNextBall() {
    // get a random ball from the unpicked balls
    let randomBall =
      gameState.unpickedBalls[
        Math.floor(Math.random() * gameState.unpickedBalls.length)
      ];
    // mark the ball as picked
    randomBall.picked = true;

    // remove the ball from unpicked balls
    gameState.unpickedBalls = gameState.unpickedBalls.filter(
      (ball) => ball.number != randomBall.number
    );

    // add the ball to picked balls
    gameState.pickedBalls.push(randomBall);

    // call the ball
    callCurrentBall();

    localStorage.setItem("gameState", JSON.stringify(gameState));
    appState.restorable = false;
  }

  // Call the current ball
  function callCurrentBall() {
    let lastBall = gameState.pickedBalls[gameState.pickedBalls.length - 1];
    if (lastBall) {
      callBall(lastBall.number, lastBall.letter, $setting);
    }
  }
  console.log(gameState);

  // function to restore game state
  function restoreGame() {
    console.log(gameState);

    gameState = previousGameState;
    appState.restorable = false;
  }
  // if settings.numberOfBalls is mutated, start a new game
  $: if ($setting.numberOfBalls) {
    newGame();
  }
  // if current page is set to settings, remove restore button
  $: if (appState.currentPage == "Settings") {
    appState.restorable = false;
  }
</script>

<main>
  {#if appState.currentPage == "MainView"}
    <MainView
      {gameState}
      showPickedBalls={$setting.showPickedBalls}
      restorable={appState.restorable}
      on:nextBall={pickNextBall}
      on:newGame={() => newGame()}
      on:showPickedBalls={() => (appState.currentPage = "DisplayAllBalls")}
      on:showSettings={() => (appState.currentPage = "Settings")}
      on:repeatBall={callCurrentBall}
      on:restorePreviousGame={restoreGame}
    />
  {:else if appState.currentPage == "DisplayAllBalls"}
    <DisplayBalls
      {gameState}
      on:back={() => (appState.currentPage = "MainView")}
    />
  {:else if appState.currentPage == "Settings"}
    <Settings on:back={() => (appState.currentPage = "MainView")} />
  {/if}
</main>
