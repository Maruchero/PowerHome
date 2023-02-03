<script>
  import Topnav from "$components/Topnav.svelte";
  import Sidenav from "$components/Sidenav.svelte";
  // import "./light-theme.css";

  let showSidenav = true;
  let alwaysShowSidenav = true;

  export let active = 0;
</script>

<!-- HEAD -->
<svelte:head>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
  />
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"
  ></script>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css"
    integrity="sha384-b6lVK+yci+bfDmaY1u0zE8YYJt0TZxLEAFyYSLHId4xoVvsrQu3INevFKo+Xir8e"
    crossorigin="anonymous"
  />
</svelte:head>

<!-- HTML -->
<div class="app">
  <div class="nav">
    <Topnav bind:showSidenav {alwaysShowSidenav} />
  </div>
  <Sidenav shown={showSidenav} bind:alwaysShown={alwaysShowSidenav} {active} />
  <main>
    <slot />
  </main>
</div>

<!-- STYLE -->
<style>
  :global(body) {
    background: #f6f6f7!important;
  }

  .app {
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: max-content auto;
  }

  .nav {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  main {
    width: 100%;
    padding: 20px;
    overflow-y: auto;
  }
</style>
