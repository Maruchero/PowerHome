<!-- JAVASCRIPT -->
<script>
  let tools = [
    {
      name: "pencil",
      onclick: null,
      visibility: "hide",
    },
    {
      name: "a",
      onclick: null,
      visibility: "hide",
    },
    {
      name: "cube",
      onclick: null,
      visibility: "hide",
    },
    {
      name: "trash",
      onclick: null,
      visibility: "hide",
    },
  ];

  // Hide and show icons
  let toolsVisible = true;
  const delay = 150;
  function showIcons() {
    toolsVisible = true;
    tools.forEach((icon, i) => {
      setTimeout(() => {
        if (toolsVisible) {
          icon.visibility = "show";
          tools = tools;
        }
      }, i * delay);
    });
  }

  function hideIcons() {
    toolsVisible = false;
    tools.forEach((icon, i) => {
      setTimeout(() => {
        if (!toolsVisible) {
          icon.visibility = "hide";
          tools = tools;
        }
      }, (tools.length - i - 1) * delay);
    });
  }
</script>

<!-- HTML -->
<div class="toolbar" on:mouseenter={showIcons} on:mouseleave={hideIcons}>
  <button class="icon">
    <i class="fa fa-gear" />
  </button>
  {#each tools as { name, onclick, visibility }, i}
    <button class="icon {visibility}" on:click={onclick}>
      <i class="fa fa-{name}" />
    </button>
  {/each}
</div>

<!-- CSS -->
<style>
  button {
    background: inherit;
    border: inherit;
    font: inherit;
    color: inherit;
  }

  .toolbar {
    box-sizing: border-box;
    width: 100%;
    position: absolute;

    display: flex;
    flex-flow: row-reverse;
    align-items: center;
    padding: 5px;
    gap: 10px;

    color: white;
    font-size: 1.2rem;
  }

  .icon {
    aspect-ratio: 1;
    border-radius: 50%;

    transition: background-color 0.3s, translate 0.3s ease-out;
  }

  .icon.hide {
    translate: 0 -150%;
  }

  .icon:hover {
    background-color: #fff8;
  }
</style>
