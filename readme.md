# xkcd

> A CLI and module to interact with the [XKCD API](https://xkcd.com/info.0.json)

## CLI Tool

## Module

```typescript
import XKCD from "../mod.ts";

await XKCD();
```

A more extensive one:

```typescript
import {
  randomXKCD,
  randomXKCDComicLink,
  XKCD,
  XKCDComicLink,
} from "../mod.ts";

await randomXKCD(); //=> A random XKCD comic metadata
await XKCD(); //=> The latest XKCD comic metadata
await randomXKCDComicLink(); //=> The asset link of a random XKCD comic
await XKCDComicLink(); //=> The asset link of a the latest XKCD comic
```

## Licence

All here is licensed under the MIT Licence.
