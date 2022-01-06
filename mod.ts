import { randomNumber } from "./deps.ts";

export interface XKCDResponse {
  month: string;
  num: number;
  link: string;
  year: string;
  news: string;
  safe_title: string;
  transcript: string;
  alt: string;
  img: string;
  title: string;
  day: string;
}

export type xkcdID = number | string;

export default async function XKCD(id?: xkcdID): Promise<XKCDResponse> {
  const response = await fetch(
    `https://xkcd.com/${id ? `${id}/` : ""}info.0.json`,
  );

  return response.json();
}

export async function XKCDComicLink(id?: xkcdID): Promise<string> {
  const data = await XKCD(id);
  return data.img;
}

export async function randomXKCD() {
  if (Number.isNaN(randomXKCD.latestNumber)) {
    const { num } = await XKCD();
    randomXKCD.latestNumber = num;
  }

  const id = randomNumber({
    min: 1,
    max: randomXKCD.latestNumber,
    integer: true,
  });

  return XKCD(id);
}

randomXKCD.latestNumber = NaN;

export async function randomXKCDComicLink() {
  const randomImage = await randomXKCD();
  return randomImage.img;
}
