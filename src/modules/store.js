import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const storage = {
  get: (string) => {
    let c = writable((browser && localStorage.getItem(string)) || undefined);
    return c;
  },
  set: (string, value) => {
    if (browser) return localStorage.setItem(string, value);
  },
};
