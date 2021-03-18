<script>
  import Link from "./Link.svelte";

  export let description;
  export let website;
  export let client;
  export let design;
  export let technology;
  export let credits;
</script>

<table class="post__info">
  <tbody>
    <tr>
      <td colspan="2" class="hyphens">{@html description}</td>
    </tr>

    {#if website}
    <tr>
      <td>Website</td>
      <td>
        <Link 
          href={website.url} 
          title={website.title}
          text={website.title}
          />
      </td>
    </tr>
    {/if}

    {#if client}
    <tr>
      <td>Client</td>
      <td>
        <Link 
          href={client.url} 
          title={client.name}
          text={client.name}
          />
      </td>
    </tr>
    {/if}

    {#if technology}
    <tr>
      <td>Tech</td>
      <td>
        <ul>
          {#each technology as name}
            <li>{name}</li>
          {/each}
        </ul>
      </td>
    </tr>
    {/if}

    {#if design}
    <tr>
      <td>Design</td>
      <td>
        <Link 
          href={design.url} 
          title={design.name}
          text={design.name}
          />
      </td>
    </tr>
    {/if}

    {#if credits}
    <tr>
      <td>Credits</td>
      <td class="flow-small">
        {#each credits as credit}
          <p class="text-capitalize">
            <Link href={credit.url} title={credit.name} text={credit.name} />: 
            {credit.work.join(', ')}
          </p>
        {/each}
      </td>
    </tr>
    {/if}

  </tbody>
</table>