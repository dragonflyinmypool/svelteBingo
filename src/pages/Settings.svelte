<script>
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

<main>
  <div id="comment">
    For questions, complaints or feature requests contact Jamie <br />Whatsapp:
    +1-305-801-7497 Email: jheiney10@gmail.com
  </div>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 300px 300px 300px 300px 300px;
    grid-template-rows: 150px 150px 150px 150px 150px;
    grid-template-areas:
      "comment comment comment comment comment"
      "R1L1 R1B1 . R2L1 R2B1"
      "R1L2 R1B2 . R2L2 R2B2"
      "R1L3 R1B3 . R2L3 R2B3"
      "R1L4 R1B4 . R2L4 R2B4";
    align-items: center;
    justify-items: center;
  }
  #comment {
    grid-area: comment;
    font-size: 15px;
    line-height: 30px;
  }
</style>
