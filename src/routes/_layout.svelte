<script>
  import Header from "../components/Header.svelte";

  export let segment;
</script>

<style>

</style>

<main p="10 sm3">
  <Header {segment} />

  <main py="4">
    <slot />
  </main>

  <footer>
    <nav>
      <div>
        <a href="https://github.com/atav1k/sapper-fortune-template">Github</a>
        <a href="/">&copy; {new Date().getFullYear()}</a>
      </div>
    </nav>
  </footer>
</main>
