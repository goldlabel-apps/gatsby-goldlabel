import React from "react"
// import { FontShape } from "../../types"
import "../theme/fonts/gotham.css"
import { useTheme, Typography } from "@mui/material"

export function Font(props: any) {
  const theme = useTheme()
  const { variant, fontSize, color, children, align, width, /*overflow*/ } = props
  let c = theme.palette.text.primary
  // if (color) c = color
  let textAlign = "left"
  let w: any = "100%"
  if (width) w = width
  let textfontSize: any = "1rem"
  let textFont = "GothamBold"
  let lineHeight: any = "1rem"
  if (align) textAlign = align
  if (variant === "black") textFont = "GothamBold"
  if (variant === "bold") textFont = "GothamBlack"
  if (variant === "thin") textFont = "GothamLight"

  if (variant === "description") {
    textfontSize = "1rem"
    lineHeight = "1rem"
  }

  if (variant === "subheader") {
    textfontSize = "1.1rem"
    lineHeight = "1.1rem"
  }

  if (fontSize) {
    lineHeight = fontSize
    textfontSize = fontSize
  }

  if (variant === "title") {
    lineHeight = "1.3rem"
    textfontSize = "1.3rem"
  }

  return (
    <Typography
      // noWrap={true}
      component="span"
      sx={{
        border: "1px solid red",
        height: 50,
        display: "block",
        // overflow: "hidden",
        textAlign,
        fontFamily: textFont,
        fontSize: textfontSize,
        lineHeight,
        color: c,
        width: w,
      }}
    >
      {children}
    </Typography>
  )
}
