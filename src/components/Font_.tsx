import React from "react"
// import { FontShape } from "../../types"
import "../theme/fonts/quicksand.css"
import { useTheme, Typography } from "@mui/material"

export function Font(props: any) {
  const theme = useTheme()
  const { variant, fontSize, color, children, align, width, /*overflow*/ } = props
  // let c = theme.palette.primary.main
  // if (color) c = color
  let textAlign = "left"
  let w: any = "100%"
  if (width) w = width
  let textfontSize: any = "1rem"
  let textFont = "Quicksand-Bold"
  let lineHeight: any = "1.2rem"
  if (align) textAlign = align
  if (variant === "black") textFont = "Quicksand-Bold"
  if (variant === "bold") textFont = "Quicksand-Black"
  if (variant === "thin") textFont = "Quicksand-Light"

  if (variant === "title") {
    lineHeight = "1.2rem"
    textfontSize = "1.4rem"
  }

  if (variant === "description") {
    textfontSize = "1.1rem"
    lineHeight = "1.3rem"
  }

  if (variant === "subheader") {
    textfontSize = "1.1rem"
    lineHeight = "1.2rem"
  }

  if (fontSize) {
    lineHeight = fontSize
    textfontSize = fontSize
  }



  return (
    <Typography
      // noWrap={true}
      component="span"
      sx={{
        // border: "1px solid red",
        display: "block",
        overflow: "hidden",
        textAlign,
        fontFamily: textFont,
        fontSize: textfontSize,
        lineHeight,
        // color: c,
        width: w,
      }}
    >
      {children}
    </Typography>
  )
}
