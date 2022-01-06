import {
  randomXKCD,
  randomXKCDComicLink,
  XKCD,
  XKCDComicLink,
} from "../mod.ts";

console.log(await randomXKCD()); //=> A random XKCD comic metadata
console.log(await XKCD()); //=> The latest XKCD comic metadata
console.log(await randomXKCDComicLink()); //=> The asset link of a random XKCD comic
console.log(await XKCDComicLink()); //=> The asset link of a the latest XKCD comic
