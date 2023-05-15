import React from "react"
import {
  CardMedia,
} from "@mui/material"

export default function Keywords(props: any) {
  const {keywords} = props
  const kwArr = keywords.split(",")
  return (<>
      {/* <pre>
        {JSON.stringify(kwArr, null, 2)}
      </pre> */}
    </>)
}
