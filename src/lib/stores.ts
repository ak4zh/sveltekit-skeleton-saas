import { writable, type Writable } from "svelte/store";

export const loading: Writable<boolean> = writable(false)