<script>
  import { config } from "../config";
  import { fade } from "svelte/transition";
  import Meta from "../components/Meta.svelte";
  import Loader from "../components/Loader.svelte";
  import Post from "../components/Post.svelte";
  import ErrorMessage from "../components/ErrorMessage.svelte";

  export let params;
  export let content; //prepopulated content

  let meta = {};

  async function getPost(params, content) {
    let json;

    if (content) {
      //use prepopulated content
      json = content;
    } else {
      //fetch from api
      const res = await fetch(`${config.api}/${params.slug}`);
      json = await res.json();

      if (!res.ok) {
        throw new Error(`Error ${json.error}`);
      }
    }

    meta = {
      title: json.title.replace("<br>", " - "),
      description: json.description,
      slug: json.slug,
      image: json.previewImage || "marker_240.jpg",
      imageAlt: json.previewImageAlt || "Weird Square Face",
    };

    return json;
  }
</script>

<Meta {...meta} />

{#await getPost(params, content)}
  <Loader />
{:then post}
  <div in:fade={{ duration: 150 }}>
    <Post {post} />
  </div>
{:catch error}
  <ErrorMessage {error} />
{/await}
