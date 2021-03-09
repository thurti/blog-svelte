import { derived, readable, writable } from 'svelte/store';

export const url = writable("/");
export const page_scroll = writable(0);