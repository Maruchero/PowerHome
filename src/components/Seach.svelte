<script>
  import { onMount } from "svelte";

  let placeholder = "Search";

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
    {placeholder}
    bind:this={input}
    on:keydown={endAnimation}
    style:animation-duration={animationDuration}
  />
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
    padding: 10px 25px;
    border-radius: 1000px;

    box-shadow: -5px -5px 10px #fff3, 5px 5px 10px #0003;

    width: 80vw;
    max-width: 350px;

    border: 0;
    font-size: 1.5rem;

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
</style>
