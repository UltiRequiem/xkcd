import { build } from "https://deno.land/x/dnt/mod.ts";

await build({
  entryPoints: ["./mod.ts", { name: "xkcd", path: "./cli.ts", kind: "bin" }],
  outDir: "./node",
  shims: {
    undici: true,
    deno: true,
  },
  package: {
    name: "@ultirequiem/xkcd",
    version: Deno.args[0],
    description:
      "Module and CLI tool to download metadata and images from xkcd",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/UltiRequiem/xkcd.git",
    },
    bugs: {
      url: "https://github.com/UltiRequiem/xkcd/issues",
    },
  },
});

await Deno.copyFile("license", "node/license");
await Deno.copyFile("readme.md", "node/readme.md");
