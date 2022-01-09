import { xkdcIterator } from "../mod.ts";

for await (const xkdc of xkdcIterator()) {
  console.log(xkdc);
}
