// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

// and what to do when importing types
declare namespace App {
  // interface Locals {}
  // interface PageData {}
  // interface Error {}
  // interface Platform {}
}

declare module "svelte-plyr" {
  export class Plyr extends SvelteComponentTyped {}
}

declare interface Window {
  player: import("plyr");
  hls: import("hls.js");
}

declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    onoutclick?: () => any;
  }
}
