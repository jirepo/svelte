# Project 

## 프로젝트 생성 

```bash
npx degit sveltejs/template svelte 
cd svelte-app
```
## 시작하기 

```bash
cd svelte
npm install
```


```bash
npm run dev
```

## 프로젝트 구조 

```
📁sevelte  # project root 
  📁public  # public folder 
    📁build # build folder 
      📄bundle.js  # bundle 파일 
      📄bundle.js.map # map 파일 
      📄global.css # css 번들 파일 
    📄index.html  
  📁src
    📁store  # svelte store 
    📁views  # svelte component folder 
    📄_custom.scss # Sass 파일 
    📄App.svelte  # Svelte App 
    📄main.js # entry point 
    📄router.js # svelte router 
  📄.gitignore
  📄package.json
  📄rollup.config.js 
```


## package.json 

scripts 에서 npm을 사용할 때 
```json
  "scripts": {
    "build": "rollup -c",
    "dev": "rollup -c -w",
    "start": "sirv public -s --no-clear"
  },
```  
scripts 에서 npx를 사용할 때 

```json
  "scripts": {
    "build": "npx rollup -c",
    "dev": "npx rollup -c -w",
    "start": "npx serve -n -l 5000 public"
  },
```


rolllup.config.js에서 npx를 사용할 때에는 --dev를 제거해야 한다. 

```jsx

function serve() {
    let server;

    function toExit() {
        if (server) server.kill(0);
    }

    return {
        writeBundle() {
            if (server) return;
            // npm 사용할 때 
            //server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
            // npx 사용할 때
            server = require('child_process').spawn('npm', ['run', 'start'], {
                stdio: ['ignore', 'inherit', 'inherit'],
                shell: true,
            });

            process.on('SIGTERM', toExit);
            process.on('exit', toExit);
        },
    };
}
```
