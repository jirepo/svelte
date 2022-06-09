import { writable } from 'svelte/store';

// wriable(value) 에 값을 전달하여 상태 변수를 정의한다. 
export const logCount = writable(0);


