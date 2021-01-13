<script>
  import Page from '../components/Page.svelte';
  import Meta from "../components/Meta.svelte";

  const meta = {
    title: "About",
    url: "about",
    description: "Hi, I'm Thomas - frontend web developer who ❤ JavaScript.",
    slug: "about",
    image: "marker_240.jpg",
    imageAlt: "Weird Square Face",
  };
</script>

<Meta {...meta} />

<Page center=true>
  
  <h1>Hi, My Name Is Thomas.</h1>

  <p>
    I am a frontend web developer with a <br>
    strong focus on JavaScript, HTML &
    CSS.
  </p>
  <p>
    Feel free to contact me<br>
    <a href="mailto:contact@thomashurtig.de">contact@thomashurtig.de</a> <br><br>
    via Twitter
    <a href="https://twitter.com/_thurti" title="twitter">@_thurti</a> <br>
    or stalk my code on  
    <a href="https://github.com/thurti" title="github">github</a>.
  </p>
  <hr>
  <h2>I Am Available for Freelance.</h2>
  <p>
    For detailed information on my skill set, <br>
    check out my <a href="/hire-me">Hire Me</a> page.
  </p>

  <br>
  <!-- <img src="static/media/avatar.png" width="200" alt="" class="text-center"> -->

  <br><br>
  <p class="text-center">
    <a href="/" on:click|preventDefault={() => window.history.back()}>Back</a>
  </p>
</Page>
