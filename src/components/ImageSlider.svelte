<script>
  import background0 from "$img/background0.jpg";
  import background1 from "$img/background1.jpg";
  import background2 from "$img/background2.jpg";
  import background3 from "$img/background3.jpg";

  let images = [background0, background1, background2, background3];
  let activeIndex = 0;
  let behindIndex = 1;
  let spans = [];
  let animate = [];
  let slideback = [];
  let direction = 1;
  let mousehover = true;

  function nextImage() {
    return activeIndex >= images.length - 1 ? 0 : activeIndex + 1;
  }

  function prevImage() {
    return activeIndex ? activeIndex - 1 : images.length - 1;
  }

  // mouse events (for dragging)
  let mousedown = false;
  let mouseDownAt = { x: 0, y: 0 };
  const deadZone = 10;
  const animateAt = 200;
  let drag = 0;

  function mouseDown(e) {
    if (mousehover) {
      mousedown = true;
      mouseDownAt = { x: e.clientX, y: e.clientY };
      slideback[behindIndex] = false;
      slideback[activeIndex] = false;
    }
  }

  function mouseUp(e) {
    mousedown = false;
    drag = 0;

    if (!animate[activeIndex]) {
      slideback[activeIndex] = true;
    }
  }

  function mouseMove(e) {
    const deltaX = e.clientX - mouseDownAt.x;

    if (mousedown && Math.abs(deltaX) > deadZone) {
      drag = deltaX > 0 ? deltaX - deadZone : deltaX + deadZone;
      behindIndex = drag < 0 ? nextImage() : prevImage();

      if (deltaX > animateAt || deltaX < -animateAt) {
        animate[behindIndex] = false;
        direction = Math.sign(drag);
        let t = activeIndex;
        drag = 0;
        mousedown = false;
        animate[t] = true;
        activeIndex = behindIndex;
        setTimeout(() => {
          animate[t] = false;
        }, 1000);
      }
    }
  }
</script>

<!-- HTML -->
<svelte:window
  on:mousedown={mouseDown}
  on:mouseup={mouseUp}
  on:mousemove={mouseMove}
/>

<div
  class="container"
  style:--drag={drag}
  on:mouseenter={() => (mousehover = true)}
  on:mouseleave={() => (mousehover = false)}
>
  {#each images as image, i}
    <span
      class="image"
      class:active={i === activeIndex}
      class:behind={i === behindIndex}
      class:animate={animate[i]}
      class:slideback={slideback[i]}
      style:--direction={direction}
      style:background-image="url({image})"
      bind:this={spans[i]}
    />
  {/each}
</div>

<!-- Style -->
<style>
  .container {
    width: 100%;
    height: 100%;
    overflow: hidden;

    position: absolute;
  }

  .image {
    pointer-events: none;
    user-select: none;

    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;

    background-image: var(--img);
    background-size: cover;
    background-position: center;
  }

  .active {
    z-index: 0;
    translate: calc(var(--drag) * 1px) 0;
  }

  .animate {
    animation: slide 500ms ease-out forwards;
  }

  .slideback {
    transition: translate 0.3s ease-out;
  }

  .behind {
    z-index: -1;
  }

  @keyframes slide {
    0% {
      translate: calc(var(--direction) * 200px) 0;
      opacity: 1;
      z-index: 0;
    }
    99% {
      translate: calc(var(--direction) * 400px) 0;
      opacity: 0;
      z-index: 0;
    }
    100% {
      z-index: -1;
      opacity: 0;
    }
  }
</style>
