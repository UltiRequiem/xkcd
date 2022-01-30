# xkcd

> A CLI and module to interact with the [XKCD API](https://xkcd.com/info.0.json)

## CLI Tool

### Install

With [Deno](https://deno.land):

```sh
deno install --allow-net --allow-write --allow-read https://deno.land/x/xkcd/cli.ts
```

With [Node.js](https://nodejs.org):

> CLI is not working yet,
> [denoland/dnt#85](https://github.com/denoland/dnt/issues/85)

```sh
yarn global add @ultirequiem/xkcd # npm install -g @ultirequiem/xkcd
```

### Usage Examples

Download the latest comic:

```sh
xkcd
```

Download comic by ID:

```sh
xkcd -i 587 # or --id 587
```

Download all comics:

```sh
xkcd -a # --all
```

Specify a directory to download the images:

```sh
xkcd --all --dir data/
```

### Builtin Help

```
xkcd --help
```

## Module

Usage Example:

```typescript
import xkcd from "https://deno.land/x/xkcd/mod.ts";

await xkcd();
```

A more extensive one:

```typescript
import {
  randomXkcd,
  randomXkcdComicLink,
  xkcd,
  xkcdComicLink,
} from "https://deno.land/x/xkcd/mod.ts";

await xkcd(); //=> The latest XKCD comic metadata
await xkcdComicLink(); //=> The asset link of a the latest XKCD comic
await randomXkcd(); //=> A random XKCD comic metadata
await randomXkcdComicLink(); //=> The asset link of a random XKCD comic
```

The same API is exposed to Node.js:

```javascript
import xkcd from "@ultirequiem/xkcd";

console.log(await xkcd());
```

## API

### [XKDC_SITE_URL](./mod.ts#19)

An string with the xkdc site URL.

### [`xkcd`](./mod.ts#L24)

This is exported as default and as named export.

Returns the metadata of the latest xkcd comic.

### [`xkcdComicLink`](./mod.ts#35)

Returns the link of the image of the last xkdc comic.

### [`xkdcIterator`](./mod.ts#44)

Returns an iterator of the metadata of the xkcd comics by ID in the specified range.

By default will give the 100 first xkcd comics.

### [`randomXkcd`](./mod.ts#L53)

Returns the metadata of a random xkcd comic.

### [`randomXkcdComicLink`](./mod.ts#L73)

Returns the link of the image of a random xkcd comic.

### [`randomXkcdIterator`](./mod.ts#81)

Returns an iterator of metadata of the specified quantity of random xkcd comics.

#### Types

- [`xkcdResponse`](./mod.ts#3)

## Licence

All here is licensed under the MIT Licence.
