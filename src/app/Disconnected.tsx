import {
  WrapperShape,
} from "../types"
import React from "react"
import "../theme/default.css"
import {
  CssBaseline,
  Container,
} from "@mui/material"
import {
  useGQLMeta,
  Slice,
  WrapRedux,
  MuiTheme,
} from "../"

export default function Disconnected(props: WrapperShape) {
  const meta = useGQLMeta()
  const {location} = props

  return (
    <>
      <WrapRedux>
          <MuiTheme>
            <CssBaseline />
            <Container maxWidth="md" sx={{mt:1}}>
              <Slice />
              <pre style={{fontSize:11}}>{JSON.stringify(location, null, 2)}</pre>
            </Container>
          </MuiTheme>
      </WrapRedux>
    </>
  )
}

/*
<pre style={{fontSize:11}}>{JSON.stringify(booksData, null, 2)}</pre>

{booksData ? <pre>{JSON.stringify(booksData, null, 2)}</pre> : null }
*/