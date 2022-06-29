<script>
    import { createEventDispatcher } from 'svelte';

    // dispatch 이벤트를 발생시키는 함수 생성
    const dispatch = createEventDispatcher();

    // dispatch를 실행할 함수 정의
    const addAction = (a, b) => {
        // a,b 이벤트 전달 파라미터의 이름이 없으면 a,b가 이름이 된다.
        dispatch('add', { a, b }); // dispatch 호출, 이벤트 발생 
    };
</script>

<h1>Dispatch Sub</h1>

<button on:click={() => addAction(10, 20)}>Add 10 + 20</button>
