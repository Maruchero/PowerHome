<script>
  export let showSidenav = true;
  export let alwaysShowSidenav = true;

  $: showSidenav = alwaysShowSidenav;

  function toggleSidenav() {
    showSidenav = !showSidenav;
  }
</script>

<nav>
  <div class="left">
    <button class="item fa fa-bars" on:click={toggleSidenav} />
    <a class="item fa fa-house" href="/"><i /></a>
  </div>
  <div class="logo">
    <h2 class="mb-0">Settings</h2>
  </div>
  <div class="right" />
</nav>

<style>
  nav {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr max-content 1fr;
    grid-column-gap: 10px;
    padding: 0 10px;

    box-sizing: border-box;
    width: 100%;
    height: 4rem;
    background: #333;
    color: white;
  }

  nav .left,
  nav .right {
    display: flex;
    gap: .5em;
    padding: 0 .5rem;
  }

  nav .right {
    justify-content: flex-end;
  }

  button,
  a {
    background: inherit;
    border: inherit;
    padding: inherit;
    color: inherit;
    font-size: inherit;
    text-decoration: none;
  }
  .item {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
  }

  /* Logo */
  .logo {
    height: 4rem;
    max-height: 100%;
    padding: 10px;

    display: flex;
    align-items: center;
  }
</style>
