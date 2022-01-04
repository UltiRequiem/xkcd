export async function download(url: string, filename: string) {
  const response = await fetch(url);
  return Deno.writeFile(filename, new Uint8Array(await response.arrayBuffer()));
}

export function filenameFromUrl(url: string) {
  const { pathname } = new URL(url);
  const index = pathname.lastIndexOf("/");
  return (-1 !== index) ? pathname.substring(index + 1) : pathname;
}

