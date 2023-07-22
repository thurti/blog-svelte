<script>
  import Page from "../components/Page.svelte";
  import Meta from "../components/Meta.svelte";
  import PageTitle from "../components/PageTitle.svelte";
  import { page_scroll } from "../store";
  import { scrollWindowTo } from "../actions/scrollWindowTo";
  import FooterImprint from "../components/FooterImprint.svelte";

  const meta = {
    title: "Privacy",
    url: "/privacy",
    description: "",
    slug: "privacy",
  };
</script>

<svelte:window use:scrollWindowTo={$page_scroll} />

<Meta {...meta} />

<PageTitle title="Privacy Policy" classname="text-only" />

<Page center={false}>
  <h2>Accountability</h2>
  <p>
    Thomas Hurtig <br />
    c/o IP-Management #15561 <br />
    Ludwig-Erhard-Straße 18 <br />
    20459 Hamburg <br /><br />
    E-Mail: <a href="mailto:contact@thomashurtig.de">contact@thomashurtig.de</a>
  </p>

  <h2>Cookies</h2>
  <p>This site uses no Cookies or any kind of tracking.</p>

  <h2>Server Logs</h2>
  <p>
    The web server stores informations in so called log files containing the
    client’s <i>redacted</i> IP address, date and time of the request, the actual
    HTTP request sent, the referrer and the user agent, i.e. the browser and operating
    system used by the client.
  </p>

  <h2>Hosting Provider</h2>
  <p>
    This site is hosted by <a href="https://uberspace.de/">Uberspace</a>. The
    person responsible according to the GDPR is: Jonas Pasche, Kaiserstr. 15,
    55116 Mainz. For more information see their
    <a href="https://uberspace.de/en/about/privacy/"
      >Privacy and Data Protection</a
    > page.
  </p>
</Page>

<FooterImprint />
