<script>
  import { fade } from 'svelte/transition';
  import Meta from "../components/Meta.svelte";
  import PostContent from "../components/PostContent.svelte";
  import PostFooter from "../components/PostFooter.svelte";

  export let content;

  const title = content.title.replace("<br>", " - ");
</script>

<Meta {title} {...content.meta} />

<main in:fade={{ duration: 150 }}>
  <PostContent {...content} />
</main>
<PostFooter {...content} />
