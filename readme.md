# xkcd

A small typed client for the xkcd API.

[![npm](https://img.shields.io/npm/v/@ultirequiem/xkcd?logo=npm&color=cb3837)](https://www.npmjs.com/package/@ultirequiem/xkcd)
[![npm downloads](https://img.shields.io/npm/dm/@ultirequiem/xkcd?color=cb3837)](https://www.npmjs.com/package/@ultirequiem/xkcd)
[![CI](https://github.com/UltiRequiem/xkcd/actions/workflows/ci.yaml/badge.svg)](https://github.com/UltiRequiem/xkcd/actions/workflows/ci.yaml)
[![codecov](https://codecov.io/gh/UltiRequiem/xkcd/graph/badge.svg)](https://codecov.io/gh/UltiRequiem/xkcd)

## Usage

ESM only, types included: the same import works in Node.js, Bun and browsers.

```javascript
import { latestXkcd, xkcd } from "@ultirequiem/xkcd";

const myFavoriteXKCD = await xkcd(304);

myFavoriteXKCD.title; //=> Nighttime Stories

await latestXkcd(); // Metadata...
```

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
