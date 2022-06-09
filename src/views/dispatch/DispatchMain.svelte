<script>
  
import DispatchSub from './DispatchSub.svelte'

let a =0;
let b =0; 

const handleEvent = (event, x, y) => {
   console.log(event)
   a = event.detail.a;   // 이벤트 발생시 전달된 값은 detail에 있음.  
   b = event.detail.b; 
}

</script>

<h1>Dispatch Main</h1>

<DispatchSub  on:add={handleEvent}/>

<h2>a : { a} ,    b:  {b}</h2>
