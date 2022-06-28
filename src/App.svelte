<script>
	
  import { Router } from 'svelte-router-spa'
  import { routes } from './routes'
  import '~/my.css'

  import Alert from 'bootstrap/js/dist/alert';
  import Button from 'bootstrap/js/dist/Button';

</script>

<main>
	<Router {routes} />


  <div class="alert alert-primary" role="alert">
    This is a primary alert—check it out!
  </div>

  <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-secondary">Left</button>
    <button type="button" class="btn btn-secondary">Middle</button>
    <button type="button" class="btn btn-secondary">Right</button>
  </div>


  <button type="button" class="btn btn-primary">
    Notifications <span class="badge badge-light">4</span>
  </button>


  <ul class="list-group">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Morbi leo risus</li>
    <li class="list-group-item">Porta ac consectetur ac</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>

</main>
