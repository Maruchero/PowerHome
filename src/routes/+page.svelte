<script>
  import Seach from "$components/Seach.svelte";
  import background from "$img/background.jpg";
  import Toolbar from "../components/Toolbar.svelte";
</script>

<Toolbar />
<div class="background" style="background-image: url({background});" />
<Seach />

<style>
  .background {
    background-image: url(img/background.jpg);
    background-size: cover;
    background-position: center;

    height: 100vh;
  }
</style>
