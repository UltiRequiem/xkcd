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

export const XKDC_SITE_URL = "https://xkcd.com";

/**
 * Returns the metadata of the latest xkcd comic.
 */
export default async function xkcd(id?: xkcdID): Promise<xkcdResponse> {
  const response = await fetch(
    `${XKDC_SITE_URL}/${id ? `${id}/` : ""}info.0.json`,
  );

  return response.json();
}

/**
 * Returns the link of the image of the last xkdc comic.
 */
export async function xkcdComicLink(id?: xkcdID) {
  const { img } = await xkcd(id);
  return img;
}

/**
 * Returns an iterator of the metadata of the xkcd comics by ID in the specified range.
 * By default will give the 100 first xkcd comics.
 */
export function* xkdcIterator(start = 1, end = 100) {
  for (let i = start; i < end; i++) {
    yield xkcd(i);
  }
}

/**
 * Returns the metadata of a random xkcd comic.
 */
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

/**
 * Returns the link of the image of a random xkcd comic.
 */
export async function randomXkcdComicLink() {
  const { img } = await randomXkcd();
  return img;
}

/**
 * Returns an iterator of metadata of the specified quantity of random xkcd comics.
 */
export function* randomXkcdIterator(quantity: number) {
  for (let i = 0; i < quantity; i++) {
    yield randomXkcd();
  }
}

export { xkcd };
