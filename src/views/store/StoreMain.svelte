<script>
    import { logCount } from '@/store/store';
    import { onDestroy } from 'svelte';  // 소멸 라이프 사이클 이벤트 

    let count = 0;

    // 구독을 통해서 변경된 값을 받아온다.
    // 구독을 하면 구독을 해지할 함수 포인터가 반환된다. 
    // onDestroy() 에서 구독을 해지 해야 한다. 
    const unsbscribe = logCount.subscribe((value) => {
        count = value;
    });

    // update를 통해서  count 값을 변경한다.
    const increaseCount = () => {
        logCount.update((value) => value + 1);
    };

    // set를 통해서 값을 초기화 한다
    const initCount = () => {
        logCount.set(0);
    };

    // 컴포넌트가 제거되면 구독을 종료한다.
    onDestroy(unsubscribe);
</script>

<h1>StoreMain</h1>
<h2>{count}</h2>
<input type="button" value="Increase Count" on:click={increaseCount} />
<input type="button" value="Reset Count" on:click={initCount} />
