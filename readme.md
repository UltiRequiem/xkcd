# xkcd

[![npm](https://img.shields.io/npm/v/@ultirequiem/xkcd?logo=npm&color=cb3837)](https://www.npmjs.com/package/@ultirequiem/xkcd)
[![npm downloads](https://img.shields.io/npm/dm/@ultirequiem/xkcd?color=cb3837)](https://www.npmjs.com/package/@ultirequiem/xkcd)
[![CI](https://github.com/UltiRequiem/xkcd/actions/workflows/ci.yaml/badge.svg)](https://github.com/UltiRequiem/xkcd/actions/workflows/ci.yaml)
[![codecov](https://codecov.io/gh/UltiRequiem/xkcd/graph/badge.svg)](https://codecov.io/gh/UltiRequiem/xkcd)

Interact with the [XKCD API](https://xkcd.com/json.html).

## Usage

The API is the same on all these platforms ✔️

### [Node.js 🐢🚀](https://npmjs.com/package/@ultirequiem/xkcd)

```javascript
import { latestXkcd, xkcd } from "@ultirequiem/xkcd";

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
## Support

Open an Issue, I will check it as soon as possible 👀

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
