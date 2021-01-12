<script>
  import Page from "../components/Page.svelte";
  import ErrorMessage from "../components/ErrorMessage.svelte";

  export let prepopulate_content;
</script>

<Page center=true>
  <ErrorMessage error={prepopulate_content.error} />
</Page>
