<script>
  import {getContext} from 'svelte'

const employee = getContext('employee')
</script>

<h1>Context Sub</h1>
<h2>{employee.name}, { employee.age}</h2>