<div class="container">
  <div class="foreground">
    <p>Loading...</p>
  </div>
  <div class="dots">
    <span /><span /><span />
  </div>
</div>

<style>
  .container {
    height: 100%;
  }

  .foreground {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    backdrop-filter: blur(10px);
  }

  .dots {
    position: absolute;
    top: 60%;
    left: 50%;
    translate: -50% -50%;
    z-index: -1;

    width: 20em;
    display: flex;
    justify-content: space-between;
  }

  .dots span {
    display: block;
    height: 1.2em;
    aspect-ratio: 1;

    border-radius: 50%;
    background-color: black;

    animation: scale-in 1s ease-in forwards;
  }

  .dots span:nth-child(1) {
    background-color: magenta;
  }

  .dots span:nth-child(2) {
    background-color: yellow;
  }

  .dots span:nth-child(3) {
    background-color: cyan;
  }

  @keyframes scale-in {
    0% {
      height: 0;
    }
    70% {
      height: 4em;
    }
    100% {
      height: 1.2em;
    }
  }
</style>
