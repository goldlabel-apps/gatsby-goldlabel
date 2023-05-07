import "../theme/default.css"
import {
  WrapperShape,
} from "../types"
import React from "react"
import "../theme/default.css"
import {
  CssBaseline,
  Avatar,
  Container,
  Card,
  CardHeader,
  CardMedia,
  CardActionArea,
} from "@mui/material"
import {
  Font,
  useGQLMeta,
  Slice,
  WrapRedux,
  MuiTheme,
} from "../"

export default function Disconnected(props: WrapperShape) {
  const meta = useGQLMeta()
  const {
    siteTitle,
    siteDescription,
    siteIcon,
    siteImage,
    siteKeywords,
  } = meta

  return (
    <>
      <WrapRedux>
          <MuiTheme>
            <CssBaseline />
            <Container maxWidth="md" sx={{mt:1}}>
              <Slice />
              <Card>
                <CardActionArea
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                    window.open("https://github.com/listingslab-goldlabel/colz", "_blank")
                  }}>
                    <CardHeader
                      title={<Font variant="title">{siteTitle}</Font>}
                      subheader={<Font>{siteDescription}</Font>}
                      avatar={<Avatar src={siteIcon} />}
                    />
                    <CardMedia 
                      component={"img"}
                      height={250}
                      src={siteImage}
                    />
                    <CardHeader
                      subheader={<Font variant="thin">keywords: {siteKeywords}</Font>}
                    />
                </CardActionArea>
              </Card>
            </Container>
          </MuiTheme>
      </WrapRedux>
    </>
  )
}

/*
<pre style={{fontSize:11}}>{JSON.stringify(meta, null, 2)}</pre>
*/