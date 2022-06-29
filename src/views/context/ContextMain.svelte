<script>
    import { setContext } from 'svelte';
    import ContextSub from './ContextSub.svelte';

    const employee = {
        name: 'John',
        age: 30,
    };

    // setContext를 사용하여 변수를 설정하면 
    // 다른 컴포넌트에서 getContet()를 사용하여 꺼낼 수 있다. 
    setContext('employee', employee);
</script>

<h1>Context Main</h1>

<ContextSub />
