import { buildPackage } from "https://deno.land/x/ultirequiem@0.0.17/node.ts";

buildPackage(
  {
    repoName: "@ultirequiem/xkcd",
    description: "Interact with the XKCD API.",
    homepage: "https://ulti.js.org/xkcd",
    keywords: ["xkcd", "comic"],
    license: "MIT",
    version: "2.1.0",
  },
  {
    entryPoints: ["./mod.ts", { name: "xkcd", path: "./xkcd.ts", kind: "bin" }],
    typeCheck: false,
    supportCJS: false,
    shims: { deno: true, prompts: true },
  },
);
