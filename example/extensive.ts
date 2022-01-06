import {
  randomXkcd,
  randomXkcdComicLink,
  xkcd,
  xkcdComicLink,
} from "../mod.ts";

console.log(await xkcd()); //=> The latest XKCD comic metadata
console.log(await xkcdComicLink()); //=> The asset link of a the latest XKCD comic
console.log(await randomXkcd()); //=> A random XKCD comic metadata
console.log(await randomXkcdComicLink()); //=> The asset link of a random XKCD comic
