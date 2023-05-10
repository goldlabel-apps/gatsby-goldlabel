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

export default function Home(props: WrapperShape) {
  const {
    pageContext,
  } = props
  let app: any = null
  if(pageContext){
    const {data} = pageContext    
    app = data.app.data.allStrapiApp.edges
    // console.log("app", app)
  }
  if (!app) return null

  return (
    <>
      <WrapRedux>
        <MuiTheme>
          <CssBaseline />
          <Container maxWidth="md" sx={{mt:2}}>
            <Start app={app}/>
            
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