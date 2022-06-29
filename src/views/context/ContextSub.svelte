<script>
    import { getContext } from 'svelte';

    // getContext를 사용하여 변수를 꺼낼 수 있다.
    const employee = getContext('employee');
</script>

<h1>Context Sub</h1>
<h2>{employee.name}, {employee.age}</h2>
