<script>
  export let message;
  export let reference;

  var buttons = document.getElementsByTagName('button');
 
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[0].id == 'nextBall') {
      buttons[0].focus()  
    }
  }

</script>

<button on:click id={reference}>{message}</button>



<style>
  button {
    margin-top: 10px;
    width: 370px;
  }
</style>
