import "../theme/default.css"
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
  Site,
  WrapRedux,
  MuiTheme,
} from "../"

export default function Disconnected(props: WrapperShape) {

  React.useEffect(() => {
    console.log("Disconnected.")
  }, [])

  return (
    <>
      <WrapRedux>
          <MuiTheme>
            <CssBaseline />
            <Container maxWidth="sm" sx={{mt:1}}>
              <Site />
            </Container>
          </MuiTheme>
      </WrapRedux>
    </>
  )
}
