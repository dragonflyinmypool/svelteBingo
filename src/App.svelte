<script>
  // Pages
  import MainView from "./pages/MainView.svelte";
  import DisplayBalls from "./pages/DisplayBalls.svelte";
  // @ts-ignore
  import Settings from "./pages/Settings.svelte";

  // *** SET STATE ***
  // Settings
  let settings = {
    showPickedBalls: true,
    numberOfBalls: 75,
    repeatCall: false,
    callBallOutloud: [],
  };

  // Game state
  let gameState = {
    unpickedBalls: [],
    pickedBalls: [],
  };

  // App state
  let state = {
    currentPage: "MainView",
  };

  // *** NEW GAME ***
  // Start a new game
  function newGame() {
    // clear picked balls
    gameState.pickedBalls = [];
    // add all balls
    gameState.unpickedBalls = createBalls(settings.numberOfBalls);
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
    if (settings.numberOfBalls == 75) {
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
  }
</script>

<main>
  {#if state.currentPage == "MainView"}
    <MainView
      {gameState}
      on:nextBall={pickNextBall}
      on:newGame={() => newGame()}
      on:showPickedBalls={() => (state.currentPage = "DisplayAllBalls")}
      on:showSettings={() => (state.currentPage = "Settings")}
    />
  {:else if state.currentPage == "DisplayAllBalls"}
    <DisplayBalls
      {gameState}
      on:back={() => (state.currentPage = "MainView")}
    />
  {:else if state.currentPage == "Settings"}
    <Settings on:back={() => (state.currentPage = "MainView")} />
  {/if}
</main>

<style>
  main {
    padding: 60px;
  }
</style>
