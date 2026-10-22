import { latestXkcd, xkcd } from "../src/index.js";

const myFavoriteXKCD = await xkcd(304);

console.log(myFavoriteXKCD.title); //=> Nighttime Stories

console.log(await latestXkcd()); // Latest Metadata...
