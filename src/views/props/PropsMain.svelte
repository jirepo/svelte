<script>

import PropsLeft from './PropsLeft.svelte';
import PropsContent from './PropsContent.svelte'
import PropsRight from './PropsRight.svelte'

// count가 증가하면 PropsLeft 컴포넌트에 반응적으로 값이 전달된다. 
let count  = 100;
const increaseCount = () => { 
  count++
 }

// 자식 컴포넌트에 전달할 함수 선언 
 const decreaseCount = () => { 
  count--
 }

</script>

<h1>Props Main</h1>
<!-- Props 전달-->
<PropsLeft  {count} />

<input type="button" value="Increase count" on:click={increaseCount}>

<hr>
<!--- 자식 컴포넌트에 함수 전달 -->
<PropsContent {decreaseCount}/>

<!-- prop 이름을 사용하여 값을 전달할 수도 있다.-->
<PropsRight title="Props Right222" />
