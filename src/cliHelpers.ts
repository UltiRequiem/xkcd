export const APP_NAME = "xkcd";
export const APP_VERSION = "0.1.0";

export function showHelp() {
  console.log(`Usage: ${APP_NAME} [OPTIONS]

    Options:
      -h, --help       Show this help message
      -v, --version    Show version
      -d, --dir        Directory to download comics
      -a, --all        Download all the possibly xkcd comics
      -i, --id         Download the comic with the given id

    Examples:
      ${APP_NAME} -d comics
      ${APP_NAME} --id 98
      ${APP_NAME} --id 98 --dir data
      `);
  Deno.exit(0);
}

export function showVersion() {
  console.log(`${APP_NAME} v${APP_VERSION}`);
  Deno.exit(0);
}
