import React from "react"
import {
  CardMedia,
} from "@mui/material"
import {makeImgSrc} from "../"

export default function ImageMedia(props: any) {
  const {data, height} = props
  let h = 250
  if(height) h = height
  const {
    alternativeText,
    url,
  } = data
  return (
    <>
      <CardMedia
        src={makeImgSrc(url)}
        alt={alternativeText}
        height={h}
        component="img"
      />
    </>
  )
}
