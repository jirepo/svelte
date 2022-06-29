<script>
  import Router from 'svelte-spa-router'
  import routes from './routes.js'   // 라우트정의 파일 import 

  // 어디에서는 css 파일을 임포트할 수 있다. 
  import '~/my.css'

</script>


  <!-- 여기에 routes.js에서 정의한 라우트 이름에 해당하는 컴포너트가 표시된다. -->
  <!-- routes 프러퍼티 전달-->
	<Router {routes} />


