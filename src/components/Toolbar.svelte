<!-- JAVASCRIPT -->
<script>
  import { goto } from "$app/navigation";
  import ThemeSelector from "$components/ThemeSelector.svelte";

  export let themeBool;
  let tools = [
    {
      name: "bookmark",
      class_: "regular",
      onclick: null,
      visibility: "hide",
    },
    {
      name: "ThemeSelector",
      class_: "none",
      onclick: null,
      visibility: "hide",
    },
    {
      name: "github",
      class_: "brands",
      onclick: () => goto("https://github.com/Maruchero"),
      visibility: "hide",
    },
    {
      name: "stack-overflow",
      class_: "brands",
      onclick: () => goto("https://stackoverflow.com/users/16529391/pasta64"),
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
  <button class="icon" on:click={() => goto("settings/")}>
    <i class="fa fa-gear" />
  </button>
  {#each tools as { name, class_, onclick, visibility }, i}
    <button class="icon {visibility}" on:click={onclick}>
      {#if i == 1}
        <ThemeSelector bind:value={themeBool} />
      {:else}
        <i class="fa-{class_} fa-{name}" />
      {/if}
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
    filter: drop-shadow(0 0 7px #fff8);
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
