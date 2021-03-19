<script>
  export let key = "t3000-darkmode";
  let enabled = true;

  if (typeof window !== "undefined") {
    enabled = JSON.parse(window.localStorage.getItem(key)) ?? window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    setBodyClass(enabled);
  }

  function setBodyClass(enabled) {
    if (enabled) {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }

  function toggle() {
    enabled = !enabled;
    window.localStorage.setItem(key, enabled);
    setBodyClass(enabled);
  }
</script>

<button class="no-style darkmode-toggle" class:enabled on:click={toggle} title="{(enabled) ? 'Enable Light Mode' : 'Enable Dark Mode'}">
  <svg class="icon icon-moon" viewBox="0 0 16 16">
    <path d="M11.185 1.008c-0.941-0.543-1.947-0.874-2.962-1.008 1.921 2.501 2.262 6.012 0.587 8.913s-4.886 4.361-8.012 3.948c0.623 0.812 1.412 1.518 2.354 2.061 3.842 2.218 8.756 0.902 10.974-2.941s0.902-8.756-2.94-10.974z"></path>
  </svg>
  <svg class="icon icon-sun" viewBox="0 0 16 16">
    <path d="M8 13c0.552 0 1 0.448 1 1v1c0 0.552-0.448 1-1 1s-1-0.448-1-1v-1c0-0.552 0.448-1 1-1zM8 3c-0.552 0-1-0.448-1-1v-1c0-0.552 0.448-1 1-1s1 0.448 1 1v1c0 0.552-0.448 1-1 1zM15 7c0.552 0 1 0.448 1 1s-0.448 1-1 1h-1c-0.552 0-1-0.448-1-1s0.448-1 1-1h1zM3 8c0 0.552-0.448 1-1 1h-1c-0.552 0-1-0.448-1-1s0.448-1 1-1h1c0.552 0 1 0.448 1 1zM12.95 11.536l0.707 0.707c0.39 0.39 0.39 1.024 0 1.414s-1.024 0.39-1.414 0l-0.707-0.707c-0.39-0.39-0.39-1.024 0-1.414s1.024-0.39 1.414 0zM3.050 4.464l-0.707-0.707c-0.391-0.391-0.391-1.024 0-1.414s1.024-0.391 1.414 0l0.707 0.707c0.391 0.391 0.391 1.024 0 1.414s-1.024 0.391-1.414 0zM12.95 4.464c-0.39 0.391-1.024 0.391-1.414 0s-0.39-1.024 0-1.414l0.707-0.707c0.39-0.391 1.024-0.391 1.414 0s0.39 1.024 0 1.414l-0.707 0.707zM3.050 11.536c0.39-0.39 1.024-0.39 1.414 0s0.391 1.024 0 1.414l-0.707 0.707c-0.391 0.39-1.024 0.39-1.414 0s-0.391-1.024 0-1.414l0.707-0.707z"></path>
    <path d="M8 4c-2.209 0-4 1.791-4 4s1.791 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zM8 10.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
  </svg>

</button>