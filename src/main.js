// 이 파일은 svelte의 entry point이다. 
// rollup.config.js에서 다른 entry point 파일을 설정할 수 있다. 
// App 임포트 
import App from './App.svelte';

// 여기서 Global하게 적용할 css를 import 한다. 
// 공통 css 임포트 
import './_custom.scss';

const app = new App({
	target: document.body,  // document.querySelector('#app')를 사용하여 엘리먼트를 지정할 수 있다. 
});

// app을 export한다. 
export default app;