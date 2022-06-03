import Main from './views/Main.svelte';
import List from './views/List.svelte';
import Detail from './views/Detail.svelte';
import UserLayout from './views/user/UserLayout.svelte'
import UserShow from './views/user/UserShow.svelte'
import UserMain from './views/user/UserMain.svelte'
import Login from './views/Login.svelte';



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