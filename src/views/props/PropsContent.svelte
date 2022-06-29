<script>
    // Props 선언 , 함수가 전달된다.
    export let decreaseCount;
</script>

<h1>PropsContent</h1>

<!-- 클릭하면 전달 받은 함수를 실행-->
<input type="button" value="Decrease Count" on:click={(event) => decreaseCount()} />
