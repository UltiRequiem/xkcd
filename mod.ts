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
