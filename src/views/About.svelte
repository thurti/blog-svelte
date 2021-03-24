<script>
  import Page from '../components/Page.svelte';
  import Meta from "../components/Meta.svelte";
  import PageTitle from '../components/PageTitle.svelte';
  import { page_scroll } from '../store';
  import { scrollWindowTo } from '../actions/scrollWindowTo';

  const meta = {
    title: "About",
    url: "/about",
    description: "Hi, my name is Thomas. I create frontend applications with HTML, CSS and JavaScript.",
    slug: "about"
  };
</script>

<svelte:window use:scrollWindowTo={$page_scroll} />

<Meta {...meta} />

<PageTitle title="About Me" classname="text-onl" />

<Page center={false}>
  <p>
    Hi, my name is Thomas. I am a frontend web developer based in Germany.
  </p>
  <p>
    My developer life started in the early 2000s right after the glory <code>{`<table>`}</code> days where nearly over and the golden web 2.0 era arised. After my studies in "Communications & Media Technology" I worked as an employed developer for a german federal office for 7 years. 
  </p>
  <p>Since 2021 I started full time freelancing as a frontend web developer 🎉.
  </p>
  <h2>🚀 Skills</h2>
  <p>These are my main programming languages.</p>
  
  <table class="table-equal">
    <thead>
      <th>Frontend</th>
      <th>Backend</th>
    </thead>
    <tbody>
      <tr>
        <td>
          <ul>
            <li>JavaScript/TypeScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>JavaScript/TypeScript (NodeJs)</li>
            <li>PHP</li>
            <li>MySQL</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>

  <h2>🖌 Frameworks</h2>
  <p>I think there is no right or wrong when it comes to frameworks. It is all about which framework fits best for the project and the team. Here are some frameworks I've already worked with.</p>

  <ul class="cols-3">
    <li>Svelte</li>
    <li>VueJs</li>
    <li>React</li>
    <li>Cypress</li>
    <li>Mocha</li>
    <li>Jasmine</li>
    <li>Sinon.JS</li>
    <li>Express</li>
    <li>Laravel</li>
    <li>SlimPHP</li>
    <li>Bootstrap</li>
    <li>PHPUnit</li>
  </ul>

  <h2>🛠 Tools</h2>
  <ul class="cols-3">
    <li>Git</li>
    <li>Typescript</li>
    <li>Webpack</li>
    <li>Sass</li>
    <li>Bash</li>
    <li>Docker</li>
    <li>Apache</li>
    <li>&hellip;</li>
  </ul>

  <h2>👾 What else?</h2>
  <p>I create stock music. You can have a listen on my profile at <a href="https://audiojungle.net/user/thurti">AudioJungle</a>.</p>
  <hr>
  <div class="flex wrap">
    <div>
      <img src="static/img/head_c@2x.jpg" alt="Face" width="200" height="200" class="clip-circle" style="transform: rotate(-6deg)">
    </div>
    <div>
      <h2>Contact Me</h2>
      <p>
        Feel free to contact me<br>
        <a href="mailto:contact@thomashurtig.de">contact@thomashurtig.de</a> <br><br>
         via Twitter
        <a href="https://twitter.com/_thurti" title="twitter">@_thurti</a> <br>
        or Github
        <a href="https://github.com/thurti" title="github">github</a>
      </p>
    </div>
  </div>
</Page>
