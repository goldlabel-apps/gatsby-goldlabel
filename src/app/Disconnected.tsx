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
} from "../"

export default function Disconnected(props: WrapperShape) {
  const {
    pageContext,
  } = props
  let app: any = null
  if(pageContext){
    const {data} = pageContext    
    app = data.app.data.allStrapiApp.edges
  }
  if (!app) return null


  React.useEffect(() => {
    console.log("Disconnected.")
  }, [])

  return (<>
      <WrapRedux>
          <MuiTheme>
            <CssBaseline />
            <Container maxWidth="md" sx={{mt:1}}>
              <Start appData={app}/>
            </Container>
          </MuiTheme>
      </WrapRedux>
    </>
  )
}
