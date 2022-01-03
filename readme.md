# xkcd

> Get an xkcd comic metadata

## Usage

```typescript
import xkcd from "https://deno.land/x/xkcd";

await xkcd(); // Returns the latest xkcd
/*
{
  month: "1",
  num: 2563,
  link: "",
  year: "2022",
  news: "",
  safe_title: "Throat and Nasal Passages",
  transcript: "",
  alt: "I always felt like what the 'you are now aware of your tongue' thing neeeded in order to be truly en...",
  img: "https://imgs.xkcd.com/comics/throat_and_nasal_passages.png",
  title: "Throat and Nasal Passages",
  day: "3"
}*/

await xkcd(39); // Returns the specified ID of xkcd
/*{
  month: "1",
  num: 39,
  link: "",
  year: "2006",
  news: "",
  safe_title: "Bowl",
  transcript: "[[A boy is glaring at a model sailing ship floating in a bowl of water.]]\nBoy: Sooner or later, my f...",
  alt: "For the moment it's a standoff",
  img: "https://imgs.xkcd.com/comics/bowl.jpg",
  title: "Bowl",
  day: "1"
}*/
```

## License

This project is licensed under the [MIT License](./LICENSE.md).
