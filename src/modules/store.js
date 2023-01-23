import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const storage = {
  get: (string) => {
    let c = writable((browser && localStorage.getItem(string)) || undefined);
    c.subscribe((value) => {
      if (browser) localStorage.setItem(string, value);
    });
    return c;
  },
  set: (string, value) => {
    if (browser) localStorage.setItem(string, value);
    return storage.get(string);
  },
};
