<script>
  let links = [
    "https://www.google.com",
    "https://www.stackoverflow.com",
    "https://maruchero.github.io",
    "https://unsplash.com",
    "https://minecraft.net",
    "https://wikipedia.org",
    "https://www.google.com",
    "https://www.stackoverflow.com",
    "https://maruchero.github.io",
    "https://unsplash.com",
    "https://minecraft.net",
    "https://wikipedia.org",
  ];

  let iconApi = "http://www.google.com/s2/favicons?domain=";
</script>

<!-- HTML -->
<div class="dock">
  <div class="links card">
    {#each links as link}
      <a href={link} title={link} style:--icon="url({iconApi + link})"><i /></a>
    {/each}
  </div>
</div>

<!-- Style -->
<style>
  .dock {
    width: max-content;
    max-width: 60vw;

    position: absolute;
    translate: -50% -50%;
    top: 50%;
    left: 50px;
  }

  .links {
    overflow-x: hidden;

    padding: 5px;
    border-radius: 15px;
  }

  a {
    display: block;
    height: 50px;
    aspect-ratio: 1;

    background-image: var(--icon);
    background-size: 50%;
    background-position: center;
    background-repeat: no-repeat;

    border-radius: 5px;

    transition: all .2s;
  }

  a:hover {
    background-color: var(--hover-background1);
    box-shadow: 0 0 5px var(--hover-shadow);
  }
</style>
