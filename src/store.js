import { writable } from 'svelte/store';

export const router_current = writable("/");
export const nav_show = writable(true);