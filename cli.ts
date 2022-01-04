import xkdc from "./mod.ts";

async function download(url: string, filename: string) {
  const response = await fetch(url);
  return Deno.writeFile(filename, new Uint8Array(await response.arrayBuffer()));
}

const xkdcData = await xkdc();

await download(xkdcData.img, "./xkcd.png");
