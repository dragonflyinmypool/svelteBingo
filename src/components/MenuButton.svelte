<script>
  export let message;
  export let reference;
  var buttons = document.getElementsByTagName('button');
</script>

<button on:click id={reference}>{message}</button>

<style>
  button {
    margin: 0px 10px;
    width: 200px;
  }
</style>
