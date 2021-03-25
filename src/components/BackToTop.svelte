<script>
  function onBack() {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  }

  function onBackToTop() {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
</script>

<div class="grid">
  <nav class="nav--post">
    <a href="/#" title="Back" on:click|preventDefault={onBack}>&larr; Back</a>
  
    <a href="/#" title="Back To Top" on:click|preventDefault={onBackToTop}>Back To Top &uarr;</a>
  </nav>
</div>
