import xkdc from "./mod.ts";
import { ensureDir, Kia, parse, Spinners } from "./src/deps.ts";
import { download, filenameFromUrl } from "./src/utils.ts";
import { APP_NAME, showHelp, showVersion } from "./src/cliHelpers.ts";

async function main() {
  const { help, h, d, dir = `./${APP_NAME}_data`, version, v, all } = parse(
    Deno.args,
  );

  if (help || h) showHelp();
  if (version || v) showVersion();

  const { img, num } = await xkdc();

  await ensureDir(dir);

  if (all) {
    const kia = new Kia({
      text: `Downloading ${num} comics...`,
      spinner: Spinners.arc,
    });

    kia.start();

    const downloadPromises = Array.from({ length: num });

    for (let index = 0; index < num; index++) {
      if (index == 404) continue;
      const { img, num } = await xkdc(index);
      downloadPromises.push(
        await download(img, `${dir}/${num}_${filenameFromUrl(img)}`),
      );
    }

    await Promise.all(downloadPromises);
    return;
  }

  await download(img, filenameFromUrl(img));
}

if (import.meta.main) {
  await main();
}
