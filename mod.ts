export type xkcdResponse = {
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
};

export default async function xkcd(
  id?: number | string,
): Promise<xkcdResponse> {
  const response = await fetch(
    `https://xkcd.com/${id ? `${id}/` : ""}info.0.json`,
  );

  return response.json();
}
