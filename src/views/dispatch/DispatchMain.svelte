<script>
    // 이벤트 발생(dispatch) 서브 컴포넌트 임포트
    import DispatchSub from './DispatchSub.svelte';

    let a = 0;
    let b = 0;

    // 서브 컴포넌트의 이벤트를 처리하기 위한 핸들러 함수
    const handleEvent = (event, x, y) => {
        console.log(event);
        a = event.detail.a; // 이벤트 발생시 전달된 값은 detail에 있음.
        b = event.detail.b;
    };
</script>

<h1>Dispatch Main</h1>

<!--서브 컴포넌트의 add 이벤트 캡쳐-->
<DispatchSub on:add={handleEvent} />

<h2>a : {a} , b: {b}</h2>
