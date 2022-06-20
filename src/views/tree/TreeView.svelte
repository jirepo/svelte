<script context="module">
    // 태그는 모든 컴포넌트가 인스턴스되었을 때 실행되는 것이 아닌 처음 script를 읽혔을 때 실행 됩니다. 보통의 script태그와 마찬가지로 변수를 선언 가능합니다.
	// retain module scoped expansion state for each tree node
	const _expansionState = {
		/* treeNodeId: expanded <boolean> */
	}
	// 여기에 있는 변수들은 반응형을 할 수 없음 
	const testFlag = false;  // 테스트용 
	console.log("최초 실행 testFlag:  " + testFlag);

	const checkTestFlag = () => {
		console.log("checkTestFlag: " + testFlag);
		// 모듈에서 하위 컴포넌트의 printTesFlag()를 호출할 수 있는지? 
		printTesFlag();  // 여기서는 컴포넌트 들의 printTestFlag()를 호출할 수 없다.  // Error 
	}

	const functions = new Set();
	const notify = () => {
		functions.forEach( func => {
			func();
		})
	}

	let currentItem; 

</script>
<script>
//	import { slide } from 'svelte/transition'
	export let tree
	const {label, children} = tree

	let current = ""; 

	const printTesFlag = () => { 
		console.log("testFlag in printTestFlag:" , testFlag); 
	}

	const clickMe = () => {
		current = currentItem; 
		console.log("current:", current); 
	}

	
	// Set에 함수 등록 
	functions.add(clickMe); 

	// 
	console.log( "testFlag:", testFlag); 

	// 최초에 expanded가 false 
	let expanded = _expansionState[label] || false
	console.log(expanded);

	const toggleExpansion = () => {
		expanded = _expansionState[label] = !expanded;
		currentItem = label; 
	}
	$: arrowDown = expanded
</script>

<button on:click="{clickMe}">Click Agagin!</button>



<ul><!-- transition:slide -->
	<li>
		{#if children}  <!-- 자식이 있으면 -->
			<span on:click={toggleExpansion}>
				<span class="arrow" class:arrowDown>&#x25b6</span>
				{label}  A 
			</span>
			{#if expanded}
				{#each children as child}
					<svelte:self tree={child} />
				{/each}
			{/if}
		{:else}
			<span>
				<span class="no-arrow"/>
				{label} B
			</span>
		{/if}
	</li>
</ul>

<style>
	ul {
		margin: 0;
		list-style: none;
		padding-left: 1.2rem; 
		user-select: none;
	}
	.no-arrow { padding-left: 1.0rem; }
	.arrow {
		cursor: pointer;
		display: inline-block;
		/* transition: transform 200ms; */
	}
	.arrowDown { transform: rotate(90deg); }
</style>
