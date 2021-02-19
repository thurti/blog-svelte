<script>
  import GithubLink from "./GithubLink.svelte";
  import Tags from "./Tags.svelte";
  import TwitterLink from "./TwitterLink.svelte";

  export let tags;
</script>

<aside class="post-meta flow happy-border">
  <div class="post-meta__content">
    <p>
      Hey, my name is Thomas.
    </p>
    <p class="small">
      I'm a freelance frontend web developer based in Germany. <br>
      <TwitterLink text="" /> 
      <GithubLink url="https://github.com/thurti" text="" /> <br>
    </p>
    <p class="small">
      You can <a href="/about">Hire Me.</a>
    </p>
  </div>
  <Tags {tags} />  
</aside>