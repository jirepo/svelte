<script>
    import { Route } from 'svelte-router-spa';

    // 모든 Route file은 current route, params, queries 등에 대한
    // 정보를 가진 currentRoute을 받을 것이다. 
    export let currentRoute;   // 객체임 
    // currentRoute 
    //  - name
    //  - component 
    //  - layout
    //  - namedParams
    //  - queryParams
    //  - childRoute 

    const params = {};
    // params
    // - to 
    // - title 
    // - styles
    // - lang 
     
    $: if(currentRoute) {
      // 콘솔에서 확인해 보자 
      console.log(currentRoute); 
      console.log("----");
      console.log(params); 
      console.log("----");
      console.log(params.to);
    }
</script>

<div>
    <h1>Admin Layout</h1>
    <!--
      Route 컴포넌트는 렌더링 된 컴포넌트에 currentRoute라는 이름을 가진 속성을 전달한다. 
    -->
    <Route {currentRoute} {params} />
</div>
