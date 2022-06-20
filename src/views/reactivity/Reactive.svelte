<script>

let count = 0; 

// count가 변하면 이 코드가 동작한다 
$: doubled = count * 2;


// 다음과 같이 하면 특정 영역을 반응성 상태로 만들 수 있다. 
$: { 
    console.log("count:" , count); 
    console.log("doubled:" , doubled); 
}

// count 값이 변하면 이 코드가 동작 
$: if(count > 5) { 
    console.log("count가 5를 넘었다.");
}


const addCount = () => {
    count++;
}

</script>
{count}
<button on:click="{addCount}">Increase Count</button>
