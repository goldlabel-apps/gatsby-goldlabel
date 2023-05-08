import {BookShape} from "../types"
import React from "react"
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  ButtonBase,
} from "@mui/material"
import {
  ImageMedia,
} from "../"

export default function BookCard(props: BookShape) {
  const {book} = props  
  // console.log("data", data)

  const {
    Title,
    Description,
    Image,
    Slug,
  } = book

  return (
    <>
      <ButtonBase 
        sx={{
          display:"block",
          textAlign: "left",
          width: "100%",
        }}
        onClick={(e: React.MouseEvent) => {
          e.preventDefault()
          window.open(`/book/${Slug}`, "_self")
        }}
      >
        <Card>
        <CardHeader
          title={ <Typography variant="h6">
                    {Title}
                  </Typography>}
          subheader={<Typography>
                      {Description}
                    </Typography>}
        />
        <CardContent>
          {Image ? <ImageMedia data={Image} height={125} /> : null }
        </CardContent>
        </Card>
      </ButtonBase>
    </>
  )
}

/*
<pre>{JSON.stringify(item, null, 2)}</pre>
*/