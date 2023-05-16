import { PaletteMode, darken } from "@mui/material"

export function makeTheme(
  mode: PaletteMode,
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
        // default: "#000",
        // paper: darken(secondary, 0.5),
      }
    },
  }
}
