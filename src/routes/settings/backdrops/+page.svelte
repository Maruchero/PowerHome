<script>
  let themes = [
    {
      name: "Anime",
      images: [
        "/img/anime/background0.jpg",
        "/img/anime/background1.jpg",
        "/img/anime/background2.jpg",
        "/img/anime/background3.jpg",
      ],
    },
    {
      name: "Minecraft landscapes",
      images: [
        "/img/minecraft_landscapes/background0.webp",
        "/img/minecraft_landscapes/background1.jpg",
        "/img/minecraft_landscapes/background2.png",
      ],
    },
    {
      name: "Nature",
      images: [
        "/img/nature/background0.jpg",
        "/img/nature/background1.jpg",
        "/img/nature/background2.jpg",
        "/img/nature/background3.jpg",
      ],
    },
    {
      name: "Windows 11",
      images: [
        "/img/windows_11/background0.jpg",
        "/img/windows_11/background1.jpg",
        "/img/windows_11/background2.jpg",
      ],
    },
  ];
</script>

<!-- HTML -->
<h1>Backdrops</h1>

<div class="cards mb-4">
  <p>Choose a theme from the default ones</p>
  <div class="card-list">
    {#each themes as { name, images }, i}
      <div class="card">
        <div class="images">
          {#each [...images].reverse() as image, j}
            <img src={image} alt="" style:--ord={j} />
          {/each}
        </div>
        <div class="placeholder">
          {name}
        </div>
      </div>
    {/each}
  </div>
</div>

<div class="cards">
  <p>Or create a new theme</p>
  <div class="card-list">
    <button>
      <div class="card">+</div>
    </button>
  </div>
</div>

<!-- STYLE -->
<style>
  p {
    color: #555;
    margin-bottom: 0.5em;
  }

  .card-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    overflow-x: auto;
  }

  .card {
    width: 19rem;
    height: 13rem;

    border-radius: 0.5rem;
    overflow: hidden;

    position: relative;
  }

  .placeholder {
    color: white;
    background-image: linear-gradient(to top, #111f 0%, #111c 2.5em, #1110 4em);

    position: absolute;
    bottom: 0;

    width: 100%;
    padding: 1em;
    padding-top: 2em;
  }

  /* Images */
  .images {
    position: absolute;
    width: 100%;
    height: 100%;
    background: red;
  }

  .images img {
    object-fit: cover;
    width: 100%;
    height: 100%;

    position: absolute;
    right: 0;

    box-shadow: 0 0 10px #0005;

    transition: right 0.3s ease-out;
  }

  .card:hover .images img {
    right: calc(var(--ord) * 40px);
  }

  /* Custome themes */
  button {
    padding: 0;
    border: 0;
    background: inherit;
    line-height: 180px;
    font-size: 13rem;
    color: #ddd;
  }
</style>
