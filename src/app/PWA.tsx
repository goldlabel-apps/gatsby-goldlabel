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

export default function PWA(props: WrapperShape) {
  const {
    pageContext,
  } = props
  let appData: any = null
  
  if(pageContext){
    const {data} = pageContext    
    appData = data
  }
  // if (!app) return null


  React.useEffect(() => {
    console.log("PWA.")
  }, [])

  return (<>
      <WrapRedux>
          <MuiTheme>
            <CssBaseline />
            <Container maxWidth="md" sx={{mt:1}}>
              <Start appData={appData}/>
            </Container>
          </MuiTheme>
      </WrapRedux>
    </>
  )
}
