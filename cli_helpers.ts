import { Kia, parse, Spinners } from "./cli_deps.ts";

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
  const { h, v, d = `${APP_NAME}_data`, a, i } = parse(Deno.args, {
    alias: { h: "help", v: "version", d: "dir", a: "all", i: "id" },
  });

  if (h) showHelp();
  if (v) showVersion();

  if (a && i) {
    console.error(
      "You can't download all and a specific comic at the same time!",
    );
    showHelp(false);
  }

  return [d, a, i];
}

export function showVersion() {
  console.log(`${APP_NAME} v${APP_VERSION}`);
  Deno.exit(0);
}

export function spinner(text: string) {
  return new Kia({ text, spinner: Spinners.arc });
}

export async function download(url: string, filename: string) {
  const response = await fetch(url);
  const data = await response.arrayBuffer();
  return Deno.writeFile(filename, new Uint8Array(data));
}

export function filenameFromURL(url: string) {
  const { pathname } = new URL(url);
  const index = pathname.lastIndexOf("/");
  return (-1 !== index) ? pathname.substring(index + 1) : pathname;
}
