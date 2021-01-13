<script>
  import { fade } from 'svelte/transition';
  import Meta from "../components/Meta.svelte";
  import Portfolio from "../components/Portfolio.svelte";
  import PostFooter from "../components/PostFooter.svelte";

  export let content;

  const title = content.title.replace("<br>", " - ");
</script>

<Meta {title} {...content.meta} />

<main>
  <Portfolio {...content} />
</main>
<PostFooter {...content} />
