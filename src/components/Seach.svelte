<script>
  import { onMount } from "svelte";

  Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
  };

  let inputContent = "";

  // Placeholders
  const placeholders = [
    "Why is FBI in my pc",
    "Tweaking Shrek",
    "Cute cats videos",
    "Gym playlist 24 hours",
    "Does my waifu love me",
    "What to do my bath is on fire",
    "maruchero.github.io",
    "I've failed art class. Where is Germany",
    "What does 'girls' mean",
    "Why am I so dumb?",
    "How to make friends",
    "America can be defined with one word",
    "Why don't I have a life",
    "How to undo delete System32",
    "Why don't I have any friends",
    "Search",
  ];
  let placeholder = placeholders.random();

  let placeholderHidden = false;
  $: {placeholderHidden = inputContent.length > 0;}

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

<form method="get" action="https://www.google.com/search">
  <input
    type="text"
    name="q"
    bind:this={input}
    bind:value={inputContent}
    on:keydown={endAnimation}
    style:animation-duration={animationDuration}
  />
  <div class="placeholder" class:active={placeholderHidden}>
    {#each placeholder as c}
      <span
      style:--y="{Math.trunc((Math.random() - 0.5) * 80)}px"
      style:--r="{Math.trunc((Math.random() - 0.5) * 30)}deg"
      >{c}</span>
    {/each}
  </div>
</form>

<style>
  form {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
  }

  input {
    display: block;
    background-color: #fff5;
    backdrop-filter: blur(10px);
    padding: 12px 25px;
    border-radius: 1000px;

    box-shadow: -5px -5px 10px #fff3, 5px 5px 10px #0003;

    width: 80vw;
    max-width: 350px;

    border: 0;
    font-size: 1.3rem;

    animation: open-search-bar 1s ease-in-out 0s forwards;
  }

  input:focus-within {
    outline: none;
  }

  @keyframes open-search-bar {
    0% {
      max-width: 0;
      translate: 0 -150%;
    }
    50% {
      translate: 0 0;
      max-width: 0;
    }
    100% {
      max-width: 350px;
    }
  }

  /* placeholder */
  .placeholder {
    position: absolute;
    top: 50%;
    left: 25px;
    translate: 0 -50%;

    overflow-x: hidden;
    text-overflow: ellipsis;
    padding: 100px 0;

    pointer-events: none;

    display: flex;
    max-width: calc(100% - 50px);

    color: #444;
  }

  .placeholder span {
    display: block;
    float: left;
    
    white-space: pre;
    font-size: 1.3rem;

    transition: all .3s ease-out;
  }

  .placeholder.active span {
    translate: 0 var(--y);
    rotate: var(--r);
    opacity: 0;
  }
</style>
