import pJSON from "../../package.json"
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

export default function Home(props: WrapperShape) {
  
  React.useEffect(() => {
    console.log(pJSON.name, pJSON.version)
  }, [pJSON])

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
