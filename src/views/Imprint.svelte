<script>
  import Page from '../components/Page.svelte';
  import Meta from "../components/Meta.svelte";
  import PageTitle from '../components/PageTitle.svelte';
  import { page_scroll } from '../store';
  import { scrollWindowTo } from '../actions/scrollWindowTo';

  const meta = {
    title: "Imprint",
    url: "/imprint",
    description: "",
    slug: "imprint"
  };
</script>

<svelte:window use:scrollWindowTo={$page_scroll} />

<Meta {...meta} />

<PageTitle title="Imprint" classname="text-only" />

<Page center={false}>
  <h2>Accountability</h2>
  <p>
    Thomas Hurtig <br>
    E-Mail: <a href="mailto:contact@thomashurtig.de">contact@thomashurtig.de</a>
  </p>

  <p>
    <a href="/privacy">Privacy Policy</a>
  </p>
</Page>
