import xkdc from "./mod.ts";
import { ensureDir } from "./cli_deps.ts";
import {
  cliArguments,
  download,
  filenameFromURL,
  spinner,
} from "./cli_helpers.ts";

const [dir, all, id] = cliArguments();

const { img, num: length } = await xkdc(id);

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
    dp.push(download(img, `${dir}/${num}_${filenameFromURL(img)}`));
  }

  await Promise.all(dp);
} else {
  await download(img, `${dir}/${length}_${filenameFromURL(img)}`);
}

kia.succeed();
