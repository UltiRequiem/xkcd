import xkdc from "./mod.ts";
import {
  cliArguments,
  download,
  ensureDir,
  filenameFromUrl,
  spinner,
} from "./src/mod.ts";

async function main() {
  const [dir, all, id] = cliArguments();

  const { img, num: length } = await xkdc();

  await ensureDir(dir);

  const kia = spinner(
    `Downloading ${all ? `${length} ` : ""}comic${all ? "s" : ""}...`,
  );

  kia.start();

  if (all) {
    const dp = Array.from({ length });

    for (let index = 0; index < length; index++) {
      if (index == 404) continue; // little xkcd author bad joke
      const { img, num } = await xkdc(index);
      dp.push(download(img, `${dir}/${num}_${filenameFromUrl(img)}`));
    }

    await Promise.all(dp);
  } else {
    await download(img, filenameFromUrl(img));
  }

  kia.succeed();
}

if (import.meta.main) {
  main();
}
