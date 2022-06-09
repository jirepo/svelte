<script>

  import {setContext} from 'svelte'
  import ContextSub from './ContextSub.svelte'

  const employee = { 
    name: 'John', 
    age: 30 
  }

setContext('employee', employee)


</script>

<h1>Context Main</h1>

<ContextSub/>