<script>
  import { onMount } from "svelte";

  Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
  };

  let inputContent = "";

  // Placeholders
  const placeholders = [
    "Tweaking Shrek",
    "Cute cats videos",
    "Gym playlist 24 hours",
    "Does my waifu love me",
    "What to do my bath is on fire",
    "Why is FBI trying to break in",
    "maruchero.github.io",
    "What does 'girls' mean",
    "Why am I so dumb?",
    "How to make friends",
    "Why don't I have a life",
    "Why this app looks so ugly",
    "How to undo delete System32",
    "Why don't I have any friends",
    "Is it worth a kidney for a 4090",
    "What is PowerHome",
    "Search",
  ];
  let placeholder = placeholders.random();

  let placeholderHidden = false;
  $: {
    placeholderHidden = inputContent.length > 0;
  }

  // Focus on input and start animation
  let input;
  let inputAnimation = false;
  onMount(() => {
    input.focus();
    inputAnimation = true;
  });

  // If user starts typing -> end initail animation
  let animationDuration = "1.5s";
  function endAnimation() {
    animationDuration = "0s";
  }
</script>

<!-- HTML -->
<form
  class="card"
  method="get"
  action="https://www.google.com/search"
  class:animate={inputAnimation}
  style:animation-duration={animationDuration}
>
  <div class="input-group">
    <input
      autocomplete="off"
      type="text"
      name="q"
      bind:this={input}
      bind:value={inputContent}
      on:keydown={endAnimation}
    />
    <div class="placeholder" class:active={placeholderHidden}>
      {#each placeholder as c}
        <span
          style:--y="{Math.trunc((Math.random() - 0.5) * 80)}px"
          style:--r="{Math.trunc((Math.random() - 0.5) * 30)}deg">{c}</span
        >
      {/each}
    </div>
  </div>
  <div class="search-button">
    <button type="submit">
      <i class="fa fa-search" />
    </button>
  </div>
</form>

<!-- Style -->
<style>
  form {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 80vw;
    height: 3rem;
    border-radius: 1000px;

    font-size: 1.2rem;

    max-width: 48px;
    translate: -50% -200%;
  }

  form.animate {
    animation: open-search-bar 1500ms ease-in-out 0ms forwards;
  }

  .input-group {
    position: relative;
    width: 100%;
  }

  input {
    padding: 0;
    width: 100%;
    min-width: 0;
    border: 0;
    font-size: 1.3rem;
    background: none;
    flex: 1 1 auto;
    color: var(--text-color1);
  }

  input:focus-within {
    outline: none;
  }

  @keyframes open-search-bar {
    0% {
      max-width: 48px;
      translate: -50% -200%;
      padding-left: 0;
    }
    50% {
      translate: -50% -50%;
      max-width: 48px;
      padding-left: 0;
    }
    100% {
      translate: -50% -50%;
      padding-left: 25px;
      max-width: 400px;
    }
  }

  /* placeholder */
  .placeholder {
    position: absolute;
    top: 50%;
    translate: 0 -50%;

    overflow-x: hidden;
    text-overflow: ellipsis;
    padding: 100px 0;

    pointer-events: none;
    user-select: none;

    display: flex;
    width: 100%;

    color: var(--text-color2);
  }

  .placeholder span {
    display: block;
    float: left;

    white-space: pre;

    transition: all 0.5s ease-out;
  }

  .placeholder.active span {
    translate: 0 var(--y);
    rotate: var(--r);
    opacity: 0;
  }

  /* Search button */
  button {
    padding: 0;
    background: none;
    border: inherit;
    font-size: 1.3rem;
    color: var(--text-color1);
  }

  .search-button {
    height: 100%;
    aspect-ratio: 1;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s, box-shadow 0.2s;
  }

  .search-button:hover,
  .search-button:focus-within {
    background: var(--hover-background1);
    box-shadow: 0 0 5px var(--hover-shadow);
  }
</style>
