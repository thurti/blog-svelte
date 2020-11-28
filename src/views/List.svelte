<script context="module">
  let current_scroll = 0;
</script>

<script>
  import { config } from "../config";
  import { onDestroy } from "svelte";
  import Meta from "../components/Meta.svelte";
  import PostList from "../components/PostList.svelte";
  import Loader from "../components/Loader.svelte";
  import ErrorMessage from "../components/ErrorMessage.svelte";

  export let params;
  export let content; //prepopulate content

  const meta = {
    title: "Welcome",
    description:
      "My development journal about things I've done. Mainly focused on web stuff...",
    slug: "",
    image: "marker_240.jpg",
    imageAlt: "Weird Square Face",
  };

  onDestroy(() => {
    current_scroll = window.scrollY;
  });

  async function getPosts(params, content) {
    if (content) { //use prepopulated content
      return content;
    } else { //fetch from api
      const url = params.tag ? `${config.api}/tag/${params.tag}` : config.api;
      const res = await fetch(url);

      if (res.ok) {
        return await res.json();
      } else {
        throw new Error(`Error ${json.error}`);
      }
    }
  }
</script>

<Meta {...meta} />

{#await getPosts(params, content)}
  <Loader />
{:then posts}
  <PostList {posts} {params} {current_scroll} />
{:catch error}
  <ErrorMessage {error} />
{/await}
