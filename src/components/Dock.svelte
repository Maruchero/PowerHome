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
  <div class="links">
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
    background-color: #fff7;
    backdrop-filter: blur(5px);
    box-shadow: -5px -5px 10px #fff4, 5px 5px 10px #0004;
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
    background-color: #fff4;
    box-shadow: 0 0 5px #0003;
  }
</style>
