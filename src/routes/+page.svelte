<script>
  import Seach from "$components/Seach.svelte";
  import background from "$img/background.jpg"
  import Toolbar from "../components/Toolbar.svelte";
</script>

<Toolbar></Toolbar>
<div class="center" style="background-image: url({background});">
  <Seach></Seach>
</div>

<style>
  Toolbar {
    position: absolute;
    top: 0;
  }

  .center {
    background-image: url(img/background.jpg);
    background-size: cover;

    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
