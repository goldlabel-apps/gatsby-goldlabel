import React from "react"
import { PaletteMode } from "@mui/material"
import {
  usePwaSelect,
  selectPWA,
  makeTheme,
} from "../"
import {
  createTheme,
  ThemeProvider,
} from "@mui/material"

export default function MuiTheme(props: any) {
  const {children} = props
  const debug = false
  const pwa = usePwaSelect(selectPWA)
  let locale: string|null = null
  if (pwa) locale = pwa.locale
  const {theme} = pwa
  // console.log("theme.DefaultDark", theme.DefaultDark)
  let colorMode: PaletteMode = "light"
  if (theme.DefaultDark) colorMode = "dark"
  const customTheme = makeTheme(colorMode, theme.Primary, theme.Secondary)

  return (
    <>
      <ThemeProvider theme={createTheme(customTheme)}>
        {children}
        {debug ? <pre>theme: {JSON.stringify(theme, null, 2)}</pre> : null }
      </ThemeProvider>
    </>
  )
}