<script>
	
	import { Router } from 'svelte-router-spa'
  import { routes } from './routes'
	
	import '~/my.css'
</script>

<main>
	<Router {routes} />
</main>
