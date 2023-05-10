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
  Start,
  WrapRedux,
  MuiTheme,
  NotFound,
} from "../"

export default function Disconnected(props: WrapperShape) {
  const {
    pageContext,
  } = props
  let contextComponents: any = null
  if(pageContext){
    const {data} = pageContext
    const {special} = data
    if (special === "404"){
      contextComponents = <NotFound />
    }
  }


  React.useEffect(() => {
    console.log("Disconnected.")
  }, [])

  return (
    <>
      <WrapRedux>
          <MuiTheme>
            <CssBaseline />
            <Container maxWidth="md" sx={{mt:1}}>
              <Start />
              {contextComponents}
            </Container>
          </MuiTheme>
      </WrapRedux>
    </>
  )
}
