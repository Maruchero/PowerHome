<script>
  let windowWidth, windowHeight;

  // Const
  const width = {
    open: "max(20vw, 270px)",
    close: "0",
  };

  // Instance variables
  export let shown = true;
  export let alwaysShown = true;
  $: alwaysShown = (windowWidth ?? 1000) > 900;
  $: shown = alwaysShown;

  // Component width
  let style;
  $: style = {
    width: shown ? width.open : width.close,
  };

  // Active
  export let active = 0;
  let activeArray = [false * 4];
  $: {
    activeArray = [false * 4];
    activeArray[active] = true;
  }
</script>

<div class="container p-0" style="width: {style?.width ?? width.open}">
  <div class="p-3 content">
    <a href="/settings">
      <button class="btn btn-light" class:active={activeArray[0]}>General</button>
    </a>
    <a href="/settings/backdrops">
      <button class="btn btn-light" class:active={activeArray[1]}>Backdrops</button>
    </a>
    <a href="/settings/bookmarks">
      <button class="btn btn-light" class:active={activeArray[2]}>Bookmarks</button>
    </a>
    <a href="/settings/user">
      <button class="btn btn-light" class:active={activeArray[3]}>User</button>
    </a>
  </div>
</div>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />

<style>
  .container {
    box-sizing: border-box;
    border-right: 1px solid #ccc;

    overflow-x: hidden;

    transition: width 0.3s ease-out;
  }

  .content {
    width: max(20vw, 270px);
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  button {
    width: 100%;
    border: 1px solid #99ccff;
  }

  button.active {
    border: 0;
    background: #5ba4ee;
    outline: 5px solid lightblue;
  }
</style>
