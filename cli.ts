import xkdc from "./mod.ts";
import { ensureDir, Kia, parse, Spinners } from "./src/deps.ts";
import { download, filenameFromUrl } from "./src/utils.ts";
import { APP_NAME, showHelp, showVersion } from "./src/cliHelpers.ts";

async function main() {
  const { help, h, d, dir = `./${APP_NAME}_data`, version, v, all } = parse(
    Deno.args,
  );

  const finalDir = d || dir;

  if (help || h) showHelp();
  if (version || v) showVersion();

  const { img, num } = await xkdc();

  await ensureDir(finalDir);

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
        await download(img, `${finalDir}/${num}_${filenameFromUrl(img)}`),
      );
    }

    await Promise.all(downloadPromises);
    kia.succeed();
    return;
  }

  const kia = new Kia({
    text: `Downloading comic...`,
    spinner: Spinners.windows,
  });

  kia.start();

  const filename = filenameFromUrl(img)

  await download(img, filename);

  kia.succeed();

  console.log(`Successfully downloaded ${filename}.`);
}

if (import.meta.main) {
  await main();
}
