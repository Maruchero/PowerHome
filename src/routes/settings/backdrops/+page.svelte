<script>
  import { wallpapers, DEFAULT, CUSTOM } from "$modules/wallpapers";
  import { storage } from "$modules/store";

  // Get wallpapers, otherwise set defaults
  let customWallpapers = storage.get("wallpapers");
  if (!$customWallpapers) customWallpapers = storage.set("wallpapers", []);

  // Wallpaper collection and index
  let wallpaperCollection = storage.get("wallpaperCollection");
  if (!$wallpaperCollection)
    wallpaperCollection = storage.set("wallpaperCollection", DEFAULT);
  let wallpaperIndex = storage.get("wallpaperIndex");
  if (!$wallpaperIndex) wallpaperIndex = storage.set("wallpaperIndex", DEFAULT);

  function setWallpaper(collection, index) {
    wallpaperCollection.set(collection);
    wallpaperIndex.set(index);
  }
</script>

<!-- HTML -->
<h1>Backdrops</h1>

<div class="cards mb-4">
  <p>Choose a theme from the default ones</p>
  <div class="card-list">
    {#if wallpapers}
      {#each wallpapers as { name, images }, i}
        <button class="card" on:click={() => setWallpaper(DEFAULT, i)}>
          <div class="images">
            {#each [...images].reverse() as image, j}
              <img src={image} alt="" style:--ord={j} />
            {/each}
          </div>
          <div class="placeholder">
            {name}
          </div>
        </button>
      {/each}
    {/if}
  </div>
</div>

<div class="cards">
  <p>Or create a new theme</p>
  <div class="card-list">
    {#if $customWallpapers}
      {#each $customWallpapers as { name, images }, i}
        <button class="card" on:click={() => setWallpaper(CUSTOM, i)}>
          <div class="images">
            {#each [...images].reverse() as image, j}
              <img src={image} alt="" style:--ord={j} />
            {/each}
          </div>
          <div class="placeholder">
            {name}
          </div>
        </button>
      {/each}
    {/if}
    <button class="card" id="add-theme">+</button>
  </div>
</div>

<!-- STYLE -->
<style>
  button {
    padding: 0;
    border: 0;
    background: inherit;
  }

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

  /* Custom themes */
  #add-theme {
    display: flex;
    align-items: center;

    line-height: 11.3rem;
    font-size: 13rem;
    color: #ddd;

    background: #eee;
  }

  button:focus-within {
    outline: none;
  }
</style>
