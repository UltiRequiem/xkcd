# xkcd

[![Code Coverage](https://codecov.io/gh/UltiRequiem/xkcd/branch/main/graph/badge.svg)](https://codecov.io/gh/UltiRequiem/xkcd)

Interact with the [XKCD API](https://xkcd.com/json.html).

## Usage

The API is the same on all this platforms ✔️

### [Node.js 🐢🚀](https://npmjs.com/package/xkcd)

```javascript
import { latestXkcd, xkcd } from "xkcd";

const myFavoriteXKCD = await xkcd(304);

myFavoriteXKCD.title; //=> Nighttime Stories

await latestXkcd(); // Metadata...
```

### [Browser 🌐](https://developer.mozilla.org/en-US/docs/Glossary/Browser)

You can use any [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) 🔥

Eg 👉
[ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) ↔️
[SkyPack](https://cdn.skypack.dev/@ultirequiem/xkcd) 🆚
[Script Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
↔️ [JSDelivr](https://cdn.jsdelivr.net/npm/@ultirequiem/xkcd)

It includes other helper methods, check the docs.

## Documentation

Types are included with the package.
## CLI

### Install

- **Deno 🎃**

```sh
deno install --allow-net https://deno.land/x/xkcd/xkcd.ts
```

- **Node.js 🐼**

```sh
npm install -g @ultirequiem/xkcd
```

### Usage

```sh
xkcd --help
```

[A binary for multiple platforms is provided too!](https://github.com/UltiRequiem/xkcd/releases/latest)

[Video Showcase](https://youtu.be/REXxeBx03SI)

## Support

Open an Issue, I will check it a soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Don't forget to star the repo ⭐

## Authors

[Eliaz Bobadilla](https://ultirequiem.com) - Creator and Maintainer 💪

See also the full list of
[contributors](https://github.com/UltiRequiem/xkcd/contributors) who
participated in this project ✨

## Versioning

We use [Semantic Versioning](http://semver.org). For the versions available, see
the [tags](https://github.com/UltiRequiem/xkcd/tags) 🏷️

## Licence

Licensed under the MIT License 📄
