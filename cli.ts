import xkdc from "./mod.ts";
import { ensureDir, parse } from "./deps.ts";

const COMMAND = "xkdc";

async function download(url: string, filename: string) {
  const response = await fetch(url);
  return Deno.writeFile(filename, new Uint8Array(await response.arrayBuffer()));
}

function showHelp() {
  console.log(`
    Usage: ${COMMAND} [OPTIONS]

    Options:
      -h, --help       Show this help message
      -v, --version    Show version
      -d, --download   Download the latest comic
      -f, --filename   Specify the filename to save the comic
    `);
  Deno.exit(0);
}

function showVersion() {
  console.log(`${COMMAND} v0.1.0`);
  Deno.exit(0);
}

async function main() {
  const args = parse(Deno.args);
  const keys = Object.keys(args);

  if (keys.length > 2) {
    console.log(`Check the parameters for correctness.`);
    console.log(keys.slice(1));
    Deno.exit(1);
  }

  const { help, dir = "./xkdc_data", version } = args;

  if (help) showHelp();
  if (version) showVersion();

  const { img } = await xkdc();

  await ensureDir(dir);
  await download(img, `./${dir}/xkcd.png`);
}

if (import.meta.main) {
  await main();
}
