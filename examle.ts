import { latestXkcd, xkcd } from "./mod.ts";

const myFavoriteXKCD = await xkcd(304);

console.log(myFavoriteXKCD.title); //=> Nighttime Stories

console.log(await latestXkcd());
