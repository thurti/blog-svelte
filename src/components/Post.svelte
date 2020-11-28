<script>
  import PostContent from "./PostContent.svelte";
  import PostFooter from "./PostFooter.svelte";

  export let post;
</script>

<main>
  <PostContent {...post} />
</main>
<PostFooter {...post} />
