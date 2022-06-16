<script>
	// from https://svelte.dev/repl/82b00644720a4ca2bdb89c6a653ec987
	import TreeView from './TreeView.svelte'

	const tree = {
		label: "USA", children: [
			{label: "Florida", children: [
				{label: "Jacksonville"},
				{label: "Orlando", children: [
					{label: "Disney World"},
					{label: "Universal Studio"},
					{label: "Sea World"},
				]},
				{label: "Miami"},
			]},
			{label: "California", children: [
				{label: "San Francisco"},
				{label: "Los Angeles"},
				{label: "Sacramento"},
			]},
		],
	}

    let label = "aa";
    let obj = {   }
    let expanded = obj[label] || false; // 이미 저장된 값이 있으면 그 값을 사용하고 없으면 false를 사용합니다.
    console.log(expanded);

    let testVal = true; 
    const clickMe = () => { 
        console.log("click me");
    }
</script>

<h1>TreeTest</h1>

<button on:click="{clickMe}">cliCk</button>


<TreeView {tree} />
