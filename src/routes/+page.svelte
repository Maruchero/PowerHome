<script>
  import Search from "$components/Search.svelte";
  import background from "$img/background.jpg";
  import Dock from "../components/Dock.svelte";
  import Toolbar from "../components/Toolbar.svelte";

  let theme = 0 ? "light" : "dark";
</script>

<!-- Theme -->
<svelte:body class={theme} />

<!-- HTML -->
<div class="{theme}-theme">
  <Toolbar />
  <div class="background" style="background-image: url({background});" />
  <Search />
  <Dock />
</div>

<style>
  .background {
    background-size: cover;
    background-position: center;

    height: 100vh;
  }

:global(.light-theme) {
  --text-color1: black;
  --text-color2: #22222a;
  
  --hover-background1: #fff4;
  --hover-background2: #fffa;
  --hover-shadow: #0003;
}

:global(.light-theme .card) {
  background-color: #fff7;
  backdrop-filter: blur(5px);
  box-shadow: -5px -5px 10px #fff4, 5px 5px 10px #0004;
}

:global(.dark-theme) {
  --text-color1: white;
  --text-color2: #aaaaaa;
  
  --hover-background1: #fff2;
  --hover-background2: #fffa;
  --hover-shadow: #0003;
}

:global(.dark-theme .card) {
  background-color: #181818d5;
  backdrop-filter: blur(5px);
  box-shadow: -5px -5px 10px #ffffff17, 5px 5px 10px #0007;
}
</style>
