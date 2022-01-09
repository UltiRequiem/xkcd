import { randomNumber } from "./deps.ts";

export interface xkcdResponse {
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

export default async function xkcd(id?: xkcdID): Promise<xkcdResponse> {
  const response = await fetch(
    `https://xkcd.com/${id ? `${id}/` : ""}info.0.json`,
  );

  return response.json();
}

export function* xkdcIterator(start = 1, end = 100) {
  for (let i = start; i < end; i++) {
    yield xkcd(i);
  }
}

export async function xkcdComicLink(id?: xkcdID): Promise<string> {
  const data = await xkcd(id);
  return data.img;
}

export async function randomXkcd() {
  if (Number.isNaN(randomXkcd.latestNumber)) {
    const { num } = await xkcd();
    randomXkcd.latestNumber = num;
  }

  const id = randomNumber({
    min: 1,
    max: randomXkcd.latestNumber,
    integer: true,
  });

  return xkcd(id);
}

randomXkcd.latestNumber = NaN;

export async function randomXkcdComicLink() {
  const randomImage = await randomXkcd();
  return randomImage.img;
}

export { xkcd };
