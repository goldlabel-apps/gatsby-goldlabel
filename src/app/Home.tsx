import pJSON from "../../package.json"
import {
  WrapperShape,
  BookShape,
} from "../types"
import React from "react"
import "../theme/default.css"
import {
  Grid,
  CssBaseline,
  Container,
} from "@mui/material"
import {
  Site,
  WrapRedux,
  MuiTheme,
  useGQLBooks,
  BookCard,
} from "../"

export default function Home(props: WrapperShape) {
  
  const books: Array<BookShape> = useGQLBooks()

  React.useEffect(() => {
    console.log(pJSON.name, pJSON.version)
    console.log("Number of books:", books.length)
  }, [pJSON, books])

  return (
    <>
      <WrapRedux>
        <MuiTheme>
          <CssBaseline />
          <Container maxWidth="sm" sx={{mt:1}}>
            <Site />
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
          </Container>
        </MuiTheme>
      </WrapRedux>
    </>
  )
}

/*
<pre>{JSON.stringify(item.node, null, 2)}</pre>
*/