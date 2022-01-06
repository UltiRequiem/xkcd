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

  const dp = Array.from({ length }, (_, index) => {
    if (index === 404) return;

    let promise;

    xkdc(index).then(({ img, num }) => {
      promise = download(img, `${dir}/${num}_${filenameFromURL(img)}`);
    });

    return promise;
  });

  await Promise.all(dp);
} else {
  await download(img, filenameFromURL(img));
}

kia.succeed();
