import { expect, it } from "vitest";

import { latestXkcd, xkcd } from "./index.js";

it("xkcd", async () => {
  const comic99 = await xkcd(99);

  expect(comic99.num).toEqual(99);
  expect(comic99.safe_title).toEqual("Binary Heart");
});

it("latestXkcd", async () => {
  const comic99 = await latestXkcd();

  expect(comic99.num > 2467).toBeTruthy();
});
