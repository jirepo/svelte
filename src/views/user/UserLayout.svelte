<script>
  import { Route } from "svelte-router-spa";
 export let currentRoute;
 const params = {}
</script>

<h1>User Layout</h1>
<Route {currentRoute} {params} />