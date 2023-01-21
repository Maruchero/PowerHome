<script>
  import Search from "$components/Search.svelte";
  import background from "$img/background.jpg";
  import Dock from "../components/Dock.svelte";
  import Toolbar from "../components/Toolbar.svelte";
</script>

<Toolbar />
<div class="background" style="background-image: url({background});" />
<Search />
<Dock />

<style>
  .background {
    background-image: url(img/background.jpg);
    background-size: cover;
    background-position: center;

    height: 100vh;
  }
</style>
