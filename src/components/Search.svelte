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

  // Focus on input
  let input;
  onMount(() => {
    input.focus();
  });

  // If user starts typing -> end initail animation
  let animationDuration = "1s";
  function endAnimation() {
    animationDuration = "0s";
  }
</script>

<form
  method="get"
  action="https://www.google.com/search"
  style:animation-duration={animationDuration}
>
  <div class="input-group">
    <input
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

<style>
  form {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #fff7;
    backdrop-filter: blur(5px);
    border-radius: 1000px;

    box-shadow: -5px -5px 10px #fff4, 5px 5px 10px #0004;

    width: 80vw;
    max-width: 400px;
    height: 3rem;

    font-size: 1.2rem;

    animation: open-search-bar 1s ease-in-out 0s forwards;
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
  }

  input:focus-within {
    outline: none;
  }

  @keyframes open-search-bar {
    0% {
      max-width: 50px;
      translate: -50% -200%;
      padding: 0;
    }
    50% {
      translate: -50% -50%;
      max-width: 50px;
      padding: 0;
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

    display: flex;
    width: 100%;

    color: #22222a;
  }

  .placeholder span {
    display: block;
    float: left;

    white-space: pre;

    transition: all 0.3s ease-out;
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
  }

  .search-button {
    height: 100%;
    aspect-ratio: 1;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.3s;
  }

  .search-button:hover,
  .search-button:focus-within {
    background: #fff5;
  }
</style>
