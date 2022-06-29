<script>
import Router from 'svelte-spa-router'
import HelloSub from './HelloSub.svelte'

const prefix = "/hello"; 
const routes = {
  '/sub': HelloSub,
}


</script>
<h1>Hello</h1>
<Router {routes} {prefix} />