<script>
import Router from 'svelte-spa-router'
import HelloSub from './HelloSub.svelte'

// src/routes.js에는 다음과 같이 정의되어 있음 
// export default  {
//   "/hello": Hello, 
//   "/hello/*": Hello, 
// }
// http://localhost/#/hello와 같이 호출할 수 있고 
// http://localhost/#/hello/sub와 같이 호출할 수 있다.


// 접두사 설정 
const prefix = "/hello"; 
// 내포된 라우트 정의
const routes = {
  '/sub': HelloSub,
  '/sub/:id': HelloSub 
}

</script>
<h1>Hello</h1>
<!-- routes와 prefix를 넘겨준다.  -->
<Router {routes} {prefix} />