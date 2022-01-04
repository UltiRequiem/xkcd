import xkdc from "./mod.ts";
import { Args, ensureDir, parse, Spinner } from "./deps.ts";
import { download, filenameFromUrl } from "./utils.ts";

const APP_NAME = "xkcd";

function showHelp() {
  console.log(`
    Usage: ${APP_NAME} [OPTIONS]

    Options:
      -h, --help       Show this help message
      -v, --version    Show version
      -d, --dir   Download the latest comic
    `);
  Deno.exit(0);
}

function showVersion() {
  console.log(`${APP_NAME} v0.1.0`);
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

function formatPath(dir: string, num: number, filename: string) {
  return `${dir}/${num}_${filenameFromUrl(filename)}`;
}

async function main() {
  const args = parse(Deno.args);

  checkForNotMultipleArguments(args);

  const { help, dir = `./${APP_NAME}_data`, version, all } = args;

  if (help) showHelp();
  if (version) showVersion();

  const { img, num } = await xkdc();

  await ensureDir(dir);

  const spinner = Spinner.getInstance();

  if (all) {
    spinner.start(`Downloading ${num} comics...`);

    const downloadPromises = Array.from({ length: num });

    for (let index = 0; index < num; index++) {
      if (index == 404) continue;
      const { img, num } = await xkdc(index);
      downloadPromises.push(await download(img, formatPath(dir, num, img)));
    }

    await Promise.all(downloadPromises);
    await spinner.succeed(`${num} comics downloaded`);
    return;
  }

  await download(img, filenameFromUrl(img));
  await spinner.succeed("Latest comic downloaded");
}

if (import.meta.main) {
  await main();
}
