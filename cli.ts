import xkdc from "./mod.ts";
import { Args, ensureDir, parse } from "./deps.ts";
import { download, filenameFromUrl } from "./utils.ts";

const COMMAND = "xkdc";

function showHelp() {
  console.log(`
    Usage: ${COMMAND} [OPTIONS]

    Options:
      -h, --help       Show this help message
      -v, --version    Show version
      -d, --dir   Download the latest comic
    `);
  Deno.exit(0);
}

function showVersion() {
  console.log(`${COMMAND} v0.1.0`);
  Deno.exit(0);
}

function checkForNotMultipleArguments(args: Args) {
  const keys = Object.keys(args);

  if (keys.length > 2) {
    console.log(`
    Check the parameters for correctness.
    Passed arguments ${keys.slice(1).join(", ")}.
    `);
    Deno.exit(1);
  }
}

async function main() {
  const args = parse(Deno.args);

  checkForNotMultipleArguments(args);

  const { help, dir = "./xkdc_data", version } = args;

  if (help) showHelp();
  if (version) showVersion();

  const { img, num } = await xkdc();

  await ensureDir(dir);
  await download(img, `./${dir}/${num}_${filenameFromUrl(img)}`);
}

if (import.meta.main) {
  await main();
}
