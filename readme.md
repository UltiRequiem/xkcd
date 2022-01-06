# xkcd

> A CLI and module to interact with the [XKCD API](https://xkcd.com/info.0.json)

## CLI Tool

## Module

Usage Example:

```typescript
import XKCD from "https://deno.land/x/xkcd/mod.ts";

await XKCD();
```

A more extensive one:

```typescript
import {
  randomXKCD,
  randomXKCDComicLink,
  XKCD,
  XKCDComicLink,
} from "https://deno.land/x/xkcd/mod.ts";

await XKCD(); //=> The latest XKCD comic metadata
await XKCDComicLink(); //=> The asset link of a the latest XKCD comic
await randomXKCD(); //=> A random XKCD comic metadata
await randomXKCDComicLink(); //=> The asset link of a random XKCD comic
```

## Licence

All here is licensed under the MIT Licence.
