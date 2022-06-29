//import {wrap} from 'svelte-spa-router/wrap'

import Main from './views/Main.svelte';
import List from './views/List.svelte';
import Detail from './views/Detail.svelte';
import NotFound from './views/NotFound.svelte';
import Hello from './views/hello/Hello.svelte';

// import Login from './views/Login.svelte';
// import PropsMain from './views/props/PropsMain.svelte'
// import DispatchMain from './views/dispatch/DispatchMain.svelte'
// import ContextMain from './views/context/ContextMain.svelte'
// import StoreMain from './views/store/StoreMain.svelte'
// import TreeTest from './views/tree/TreeTest.svelte'
// import Reactive from './views/reactivity/Reactive.svelte'

// import UserLayout from './views/user/UserLayout.svelte'
// import UserShow from './views/user/UserShow.svelte'
// import UserMain from './views/user/UserMain.svelte'


// import AdminLayout from './views/admin/AdminLayout.svelte';
// import AdminIndex from './views/admin/AdminIndex.svelte';
// import EmployeesIndex from './views/admin/employees/EmployeesIndex.svelte';
// import EmployeesShow from './views/admin/employees/EmployeesShow.svelte';


// 아래는 svelte-spa-router를 사용할 때 
// http:/localhost:8080/#/list 와 같이 라우팅 경로 앞에 #이 붙어야 한다. 
// 라우팅 경로 설정 
export default  {
  // http://localhost/
  "/": Main,
  // http://localhost/#/list 
  "/list": List,
  // http://localhost/#/detail
  "/detail": Detail,
  "/hello": Hello, 
  "/hello/*": Hello, 
  "*": NotFound,
}

// https://awesomejs.dev/for/svelte/pkg/246191294710284814/

// import { wrap } from "svelte-spa-router/wrap";

// import RouteLoading from "./RouteLoading.svelte";
// import RouteNotFound from "./RouteNotFound.svelte";

// export const routes = new Map()
//   .set("/", wrap({ asyncComponent: () => import("./Home.svelte") }))
//   .set(
//     /^\/todos(\/(.*))?/i,
//     wrap({
//       asyncComponent: () => import("./todos/Index.svelte"),
//       loadingComponent: RouteLoading
//     })
//   )
//   .set("*", RouteNotFound);


// 아래는 svelte-router-spa를 사용할 때 정의 
// {
//   name: "/",
//   component: Main
// }
//   {
//     // 기본 라우팅 경로 테스트
//     // http://localhost:8080/list
//     name:"list",
//     component: List,
//   },
//   {
//     // 기본 라우팅 경로 테스트
//     // http://localhost:8080/detail
//     name:"detail",
//     component: Detail,
//   },
//   {
//     // 기본 라우팅 경로 테스트
//     name:"login",
//     component: Login,
//   },
//   {
//     // 프러퍼티 전달 테스트 
//     name:"props",
//     component: PropsMain,
//   },
//   {
//     // dispatch 이벤트 테스트 
//     name:"dispatch",
//     component: DispatchMain,
//   },
//   {
//     // context 전달 테스트
//     name:"context",
//     component: ContextMain,
//   },
//   {
//     // store 테스트 
//     name:"store",
//     component: StoreMain,
//   },
//   {
//     // Svelte 트리 테스트 
//     name:"tree",
//     component: TreeTest,
//   },
//   {
//     // 반응 $: 테스트 
//     name:"reactive",
//     component: Reactive,
//   },
//   {
//     name: "admin", //  http://localhost:8080/admin 
//     // 라우트가 nestedRoutes 를 가진다면 Layout이어야 한다. 
//     component: AdminLayout, // 이 라우트가 active일 때 렌더링될 컴포넌트 
//     // component가  null이면 있어야 함 
//     // 자식 컴포넌트들을 위한 컨테이너 역학을 할 컴포넌트
//     // layout: AdminLayout, // 레이아웃 컴포넌트
//     // component와 layout은 둘 다 명시될 수 있다. 
//     nestedRoutes: [
//       // /admin/index로 호출하지 않고 /admin으로 호출 
//       { name: 'index', component: AdminIndex }, // name="index"는 자동으올 라우팅된다. 
//       {
//         // http://localhost:8080/admin/employees
//         // /admin/employees
//         name: 'employees',
//         component: '',
//         nestedRoutes: [
//           { name: 'index', component: EmployeesIndex },
//           // /admin/employees/show
//           // /admin/employees/show/{id}
//           // currentRoute.namedParams.id 와 같이 :id에 대한 값을 얻을 수 있다.
//           { name: 'show/:id', component: EmployeesShow },
//         ]
//       }
//     ]
//   },
//   // Nested Routing 예 
//   // {
//   //   name:"user",
//   //   component: UserLayout,
//   //   //component: '', // component의 값을 비워두면 name='index'로 설정된 컴포넌트가 라우팅 된다. 
//   //   //redirectTo: 'login',  // login 경로로 리다이렉트 한다. 
//   //   // onlyIf 속성을 살펴보면, user 페이지에 접근하면 isAccessable 함수를 실행하고 결과가 false이면 /login으로 리다이렉트한다.
//   //   //onlyIf: { guard: isAccessable, redirect: '/login' },
//   //   nestedRoutes: [
//   //     // user/index 
//   //     //{ name: 'index', component: UserLayout},
//   //     { name: 'start', component: UserMain},
//   //     // user/show:123 
//   //     // :id 는 파라미터 
//   //     { name: "show/:id", component: UserShow }
//   //   ]
//   // },  
// ]