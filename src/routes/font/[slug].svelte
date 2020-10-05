<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const res = await this.fetch(`font/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import variables from 'svelte-css-vars';
  export let heading = '4rem'
  $: style = {
    heading,
  };
  export let post;
</script>

<style>
  [uppercase] {
    text-transform: uppercase;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
    <link rel="stylesheet" href="{post.css}">
</svelte:head>

<section p="8 sm3">
  <ul grid columns="2" gap="8">
    <li cell>
      <header>
        {#each post.tags as tag, index }
          <li chip>{tag}</li>
        {/each}
        <h1 style="font-family:{post.title}">{post.title}</h1>
      </header>
      <ul>
        {#each post.designers as designer, index }
          <li>{designer}</li>
        {/each}
        {#each post.foundries as foundry, index }
          <li>{foundry}</li>
        {/each}
        {#each post.socials as social, index }
          <li><a href="{social}">{social}</a></li>
        {/each}
      </ul>
    </li>
    <li cell>
      <h2>
        {@html post.html}
      </h2>
    </li>
    <li>
    </li>
  </ul>
</section>
<section use:variables={style} p="8 sm3" bg="gray3">
  <h1>Specimen</h1>
  <a chip>24px</a>
  <ul grid columns="2" gap="8">
    <li>
      <h5 uppercase>Headline</h5>
      <h1 contenteditable="true" style="font-family:{post.title}" uppercase>{post.headline}</h1>
    </li>
    <li>
      <h4 uppercase>Sentence</h4>
      <h1 contenteditable="true" style="font-family:{post.title}">{post.sentence}</h1>
    </li>
    <li>
      <p uppercase>Paragraph</p>      
      <h3 contenteditable="true" style="font-family:{post.title}">{post.paragraph}</h3>
    </li>
    <li>
      <p uppercase>Letterset</p>      
      {#each post.variants as variant, index }
        <h1 style="font-family:{post.title}; font-weightt:{variant}">
          Aa
          Bb
          Cc
          Dd
          Ee
          Ff
          Gg
          Hh
          Ii
          Jj
          Kk
          Ll
          Mm
          Nn
          Oo
          Pp
          Qq
          Rr
          Ss
          Tt
          Uu
          Vv
          Ww
          Xx
          Yy
          Zz
          1234567890
        </h1>
      {/each}
    </li>
  </ul>
</section>