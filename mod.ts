export const XKDC_URL = "https://xkcd.com";

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

/**
 * Returns the metadata of the XKDC comic with the desired ID.
 */
export async function xkcd(id: number | string): Promise<XKCDResponse> {
  const response = await fetch(`${XKDC_URL}/${id}/info.0.json`);

  return response.json();
}

/**
 * Returns the metadata of the latest XKDC comic.
 */
export async function latestXkcd(): Promise<XKCDResponse> {
  const response = await fetch(`${XKDC_URL}/info.0.json`);

  return response.json();
}
