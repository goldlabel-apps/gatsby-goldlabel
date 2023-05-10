import React from "react"
import {
  WrapperShape,
} from "../types"
import "../theme/default.css"
import {
  CssBaseline,
  Container,
} from "@mui/material"
import {
  Start,
  WrapRedux,
  MuiTheme,
} from "../"

export default function Home(props: WrapperShape) {
  const {
    pageContext,
  } = props
  let app: any = null
  if(pageContext){
    const {data} = pageContext    
    app = data.app.data.allStrapiApp.edges
  }
  if (!app) return null

  return (<>
      <WrapRedux>
        <MuiTheme>
          <CssBaseline />
          <Container maxWidth="md" sx={{mt:2}}>
            <Start appData={app}/>
          </Container>
        </MuiTheme>
      </WrapRedux>
    </>
  )
}
