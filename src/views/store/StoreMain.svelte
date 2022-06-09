<script>

import { logCount } from '@/store/store';
import { onDestroy } from 'svelte';

let count = 0; 
// 구독을 통해서 변경된 값을 받아온다.
const unsbscribe = logCount.subscribe(value => {
  count = value;
});

// update를 통해서  count 값을 변경한다.
const increaseCount = () => {
  logCount.update( value => value + 1)
}

// set를 통해서 값을 초기화 한다 
const initCount = () => {
  logCount.set( 0); 
}


onDestroy(unsubscribe);

</script>

<h1>StoreMain</h1>
<h2>{count}</h2>
<input type="button" value="Increase Count" on:click={increaseCount}>
<input type="button" value="Reset Count" on:click={initCount}>