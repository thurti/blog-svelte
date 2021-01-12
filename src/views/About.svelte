<script>
  import Page from '../components/Page.svelte';
  import Meta from "../components/Meta.svelte";

  const meta = {
    title: "About",
    description: "Hi, I'm Thomas - frontend web developer who ❤ JavaScript.",
    slug: "about",
    image: "marker_240.jpg",
    imageAlt: "Weird Square Face",
  };
</script>

<Meta {...meta} />

<Page center=true>
  <h1>Hi, my name is Thomas.</h1>
  <p>
    I'm a frontend web developer with a strong <br> 
    focus on JavaScript, HTML & CSS.
    <br /><br />

    I'm not that active on social media, but feel <br>
    free to contact me on Twitter
    <a href="https://twitter.com/_thurti" title="twitter">@_thurti</a> <br>
    or stalk my code on 
    <a href="https://github.com/thurti" title="github">github</a>.
    <br /><br />
    <a href="/" on:click|preventDefault={() => window.history.back()}>Back</a>
</Page>
