import xkdc from "./mod.ts";
import {
  cliArguments,
  download,
  ensureDir,
  filenameFromURL,
  spinner,
} from "./src/mod.ts";

const [dir, all, id] = cliArguments();

const { img, num: length } = await xkdc(id);

const kia = spinner(
  `Downloading ${all ? `${length} ` : ""}comic${all ? "s" : ""}...`,
);

kia.start();

if (all) {
  await ensureDir(dir);

  const dp = Array.from({ length });

  for (let index = 0; index < length; index++) {
    if (index == 404) continue; // little xkcd author bad joke
    const { img, num } = await xkdc(index);
    dp.push(await download(img, `${dir}/${num}_${filenameFromURL(img)}`));
  }

  await Promise.all(dp);
} else {
  await download(img, filenameFromURL(img));
}
