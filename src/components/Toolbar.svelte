<!-- JAVASCRIPT -->
<script>
  let tools = [
    {
      name: "bookmark",
      class_: "regular",
      onclick: null,
      visibility: "hide",
    },
    {
      name: "pencil",
      class_: "solid",
      onclick: null,
      visibility: "hide",
    },
    {
      name: "github",
      class_: "brands",
      onclick: null,
      visibility: "hide",
    },
    {
      name: "stack-overflow",
      class_: "brands",
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
  {#each tools as { name, class_, onclick, visibility }, i}
    <button class="icon {visibility}" on:click={onclick}>
      <i class="fa-{class_} fa-{name}" />
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
    width: max-content;
    height: 5rem;
    position: absolute;
    right: 0;

    display: flex;
    flex-flow: row-reverse;
    align-items: flex-start;
    padding: 5px;
    gap: 10px;

    color: black;
    font-size: 1.2rem;
  }

  .icon {
    height: 2.2rem;
    aspect-ratio: 1;
    border-radius: 50%;

    transition: background-color 0.3s, translate 0.3s ease-out;
  }

  .icon.hide {
    translate: 0 -150%;
  }

  .icon:hover {
    background-color: var(--hover-background2);
    box-shadow: 0 0 5px var(--hover-shadow);
  }
</style>
