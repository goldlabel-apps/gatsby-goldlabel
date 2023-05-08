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
  Slice,
  WrapRedux,
  MuiTheme,
  useGQLBooks,
} from "../"

export default function Home(props: WrapperShape) {
  const books = useGQLBooks ()
  console.log("books", books)
  React.useEffect(() => {
    console.log(pJSON.name, pJSON.version)
  }, [])

  return (
    <>
      <WrapRedux>
        <MuiTheme>
          <CssBaseline />
          <Container maxWidth="md" sx={{mt:1}}>
            <Slice />
            <pre style={{fontSize:11}}>{JSON.stringify(books, null, 2)}</pre>
          </Container>
        </MuiTheme>
      </WrapRedux>
    </>
  )
}
