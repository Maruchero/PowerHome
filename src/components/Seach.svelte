<script>
  let placeholder = "Search";
</script>

<form>
  <input type="text" {placeholder} autofocus />
</form>

<style>
  form {
    background-color: #fff5;
    backdrop-filter: blur(10px);
    padding: 10px 25px;
    border-radius: 1000px;

    box-shadow: -5px -5px 10px #fff3, 5px 5px 10px #0003;
  }

  input {
    width: 80vw;
    max-width: 350px;

    background: transparent;
    border: 0;
    font-size: 1.5rem;
  }

  input:focus-within {
    outline: none;
  }
</style>
