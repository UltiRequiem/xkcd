import { assertEquals } from "https://deno.land/std@0.148.0/testing/asserts.ts";
import xkcd from "./mod.ts";

Deno.test("xkcd", async () => {
  const ID = 99;

  const { num } = await xkcd(ID);

  assertEquals(num, ID);
});
