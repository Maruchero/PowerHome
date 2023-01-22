<script>
  export let value = false;
</script>

<!-- HTML -->
<label class="switch">
  <input type="checkbox" bind:checked={value}>
  <span class="slider"></span>
</label>

<!-- Style -->
<style>
  .switch {
    display: flex;
    align-items: center;
    justify-content: center;
  }
/* Hide default HTML checkbox */
.switch input {
  display: none;
}

/* The slider */
.slider {
  display: block;
  height: 1em;
  aspect-ratio: 1;
  border-radius: 50%;
  margin-top: 1px;
  
  box-shadow: inset 8px -4px 0px 0px #000;
  background: var(--background);
  transition: .5s;
}

input:checked + .slider {
  box-shadow: inset 15px -4px 0px 15px #000;
}
</style>