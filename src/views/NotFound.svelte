<script>
  import ErrorMessage from "../components/ErrorMessage.svelte";

  export let prepopulate_content;
</script>

<main>
  <ErrorMessage error={prepopulate_content.error} />
</main>
