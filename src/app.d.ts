// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
import type { Picture } from 'imagetools-core';

export declare namespace App {
  // interface Locals {}
  // interface PageData {}
  // interface Error {}
  // interface Platform {}

  declare module '*&picture' {
    const out: Picture;
    export default out;
  }
}
