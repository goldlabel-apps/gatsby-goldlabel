import {
  WrapperShape,
  BookShape,
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
  BookCard,
} from "../"

export default function Home(props: WrapperShape) {
  const {
    pageContext,
  } = props
  // let contextComponents: any = null
  if(pageContext){
    // const {data} = pageContext
    // console.log("pageContext", data)
  }

  React.useEffect(() => {
  }, [])

  return (
    <>
      <WrapRedux>
        <MuiTheme>
          <CssBaseline />
          <Container maxWidth="md" sx={{mt:2}}>
            <Site />
          </Container>
        </MuiTheme>
      </WrapRedux>
    </>
  )
}

/*


{books.length ? <>
              <Grid container spacing={1} sx={{mt:1}}>
                {books.map((item: BookShape, i: number) => {
                  return <Grid 
                            xs={12} md={6}
                            key={`book_${i}`}
                            item>
                            <BookCard book={item.node} />
                          </Grid>
                })}
              </Grid>
            </> : null }



<pre>{JSON.stringify(item.node, null, 2)}</pre>
*/