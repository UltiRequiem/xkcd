import { assertEquals } from "./deps.ts";
import xkcd from "./mod.ts";

Deno.test("xkcd", async () => {
  const ID = 99;

  const comicID99 = await xkcd(ID);

  assertEquals(comicID99.num, ID);
});
