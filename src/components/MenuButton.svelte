<script>
  export let message;
  export let reference;
  var buttons = document.getElementsByTagName('button');
</script>

<button on:click id={reference}>{message}</button>

<style>
  button {
    margin-top: 10px;
    width: 270px;
  }
</style>
