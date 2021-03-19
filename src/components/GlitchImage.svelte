<script>
  export let src;
  export let alt = "";
  export let width;
  export let height;
  export let slizes = 12;
  export let randomize = 10;

  const slizes_idx = Array.from(Array(slizes).keys()).map(idx => 100 / slizes * idx); //[0,25,50,75]
  const slizes_idx_reversed = Array.from(slizes_idx).reverse();

  function rand(min, max) {
    return Math.floor(min + Math.random()*(max + 1 - min))
  }
</script>

<div class="glitch-image" style={`width: ${width}px; height: ${height}px`}>
  <div class="clip-circle" style="width: 100%; height: 100%">
    {#each slizes_idx as slize, idx}
      <img 
        {src} 
        {alt} 
        style={`clip-path: inset(0 ${slizes_idx[idx]}% 0 ${slizes_idx_reversed[idx]}%); transform: translate(0,${rand(0,randomize)}%)`}
        >
      <img 
        {src} 
        {alt} 
        style={`clip-path: inset(${slizes_idx[idx]}% 0 ${slizes_idx_reversed[idx]}% 0); transform: translate(${rand(-randomize,0)}%, 0)`}
        >
    {/each}
  </div>
</div>