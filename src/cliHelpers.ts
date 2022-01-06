import { Kia, parse, Spinners } from "./deps.ts";

export const APP_NAME = "xkcd";
export const APP_VERSION = "0.1.0";

export function showHelp(successfully = true) {
  const log = successfully ? console.log : console.error;

  log(`Usage: ${APP_NAME} [OPTIONS]

    Options:
      -h, --help       Show this help message
      -v, --version    Show version
      -d, --dir        Directory to download comics
      -a, --all        Download all the possibly xkcd comics
      -i, --id         Download the comic with the given id

    Examples:
      ${APP_NAME} -d comics
      ${APP_NAME} --id 98
      ${APP_NAME} --id 98 --dir data`);

  Deno.exit(successfully ? 0 : 1);
}

export function cliArguments() {
  let { h, help, d, dir = `${APP_NAME}_data`, v, version, a, all, i, id } =
    parse(
      Deno.args,
    );

  if (h || help) {
    showHelp();
  }

  if (v || version) {
    showVersion();
  }

  dir = d || dir;
  all = a || all;
  id = i || id;

  if (all && id) {
    console.error(
      "You can't download all and a specific comic at the same time!",
    );
    showHelp(false);
  }

  return [dir, all, id];
}

export function showVersion() {
  console.log(`${APP_NAME} v${APP_VERSION}`);
}

export function spinner(text: string) {
  return new Kia({ text, spinner: Spinners.arc });
}
