<script>
    // Nested Route 테스트를 위한 컴포넌트
    import { Route } from 'svelte-router-spa';

    // 현재 경로에 대한 정보는 속성으로 수신되므로 currentRoute를 정의하고 내보내야 한다.
    // currentRoute에는 현재 경로와 자식 경로에 대한 모든 정보가 있다.
    export let currentRoute;
    const params = {};
</script>

<h1>User Layout</h1>
<Route {currentRoute} {params} />
