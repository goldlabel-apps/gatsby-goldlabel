# Gatsby Template

> Multiple Gatsby static front ends are cheap to host can all use the same,  
scalable, strapi headless CMS

##  Localise Language

Because it might as well be in Chinese, right?

是的，兄弟 🤙
太 🧜‍♂️ 完美了 🦹‍♀️
看看这里 👉
那是老学校 🤟
超 🦹‍♀️ 级反派女人
天👼使
👉 美人鱼 🧜
🧜 美人鱼
👼 天使
是的，🤙 兄弟
👌 太完美了
👉 看看这里
那 🤟 是 🤙 老 🤟 学 🧜‍♂️ 校 🤟
🦹‍♀️ 超级反派女人

## Theme

```bash
    /src/theme/
        makeTheme.tsx
        default.css
        /fonts
            /quicksand.css
            /quicksand/Quicksand-Regular.otf
            ...
```

**/src/theme/makeTheme.tsx**

```javascript
import { PaletteMode } from "@mui/material"

export function makeTheme(
  mode: PaletteMode, // light | dark
  primary: string,
  secondary: string
) {
  return {
    palette: {
      mode,
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
      background: {
        default: primary,
      }
    },
  }
}
```
