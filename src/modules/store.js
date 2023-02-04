import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const storage = {
  get: (string) => {
    let c;

    // Get value if exists
    if (browser && localStorage.getItem(string))
      c = writable(JSON.parse(localStorage.getItem(string)));
    else c = writable(undefined);

    // Auto subscription
    c.subscribe((value) => {
      if (browser) localStorage.setItem(string, JSON.stringify(value));
    });
    return c;
  },

  set: (string, value) => {
    if (browser) localStorage.setItem(string, JSON.stringify(value));
    return storage.get(string);
  },
};
