import {
  assertEquals,
  assert,
} from "https://deno.land/std@0.148.0/testing/asserts.ts";

import { xkcd, latestXkcd } from "./mod.ts";

Deno.test("xkcd", async () => {
  const comic99 = await xkcd(99);

  assertEquals(comic99.num, 99);
  assertEquals(comic99.safe_title, "Binary Heart");
});

Deno.test("latestXkcd", async () => {
  const comic99 = await latestXkcd();

  assert(comic99.num > 2467);
});
