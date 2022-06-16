import Main from './views/Main.svelte';
import List from './views/List.svelte';
import Detail from './views/Detail.svelte';
import UserLayout from './views/user/UserLayout.svelte'
import UserShow from './views/user/UserShow.svelte'
import UserMain from './views/user/UserMain.svelte'
import Login from './views/Login.svelte';
import PropsMain from './views/props/PropsMain.svelte'
import DispatchMain from './views/dispatch/DispatchMain.svelte'
import ContextMain from './views/context/ContextMain.svelte'
import StoreMain from './views/store/StoreMain.svelte'
import TreeTest from './views/tree/TreeTest.svelte'

function isAccessable() {
  // return true or false
  return false; 
}



const routes = [
  {
    name:"/",
    component: Main,
  },
  {
    name:"list",
    component: List,
  },
  {
    name:"detail",
    component: Detail,
  },
  {
    name:"login",
    component: Login,
  },

  {
    name:"props",
    component: PropsMain,
  },
  {
    name:"dispatch",
    component: DispatchMain,
  },
  {
    name:"context",
    component: ContextMain,
  },
  {
    name:"store",
    component: StoreMain,
  },
  {
    name:"tree",
    component: TreeTest,
  },
  
  {
    name:"user",
    component: '',
    redirectTo: 'login',
    //onlyIf: { guard: isAccessable, redirect: '/login' },
    nestedRoutes: [
      { name: 'index', component: UserLayout},
      { name: "show/:id", component: UserShow }
    ]
  },  
]



export { routes }