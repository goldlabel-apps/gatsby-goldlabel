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
      success: {
        main: "#FFFFFF",
      },
      background: {
        default: primary,
        paper: darken(primary, 0.5),
      }
    },
  }
}
