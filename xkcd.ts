import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.3/command/mod.ts";
import { colors } from "https://deno.land/x/cliffy@v1.0.0-rc.3/ansi/colors.ts";
import { latestXkcd, xkcd } from "./mod.ts";

const command = new Command()
  .name("xkcd")
  .version("1.0.0")
  .description("XKCD on directly in your CLI!")
  .arguments("[input:number]");

const {
  args: [id],
} = await command.parse();

const comicData = await (id ? xkcd(id) : latestXkcd());

console.log(colors.bgBrightMagenta(`"${comicData.title}" - ${comicData.num}`));

console.log();

if (comicData.transcript) {
  console.log(colors.yellow(comicData.transcript));
}

console.log();

console.log(colors.blue(`Alt: ${comicData.alt}`));
