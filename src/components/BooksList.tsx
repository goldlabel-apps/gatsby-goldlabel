import {BookShape} from "../types"
import React from "react"
import {
  BooksShape,
} from "../types"
import {
  Grid,
} from "@mui/material"
import {
  BookCard,
} from "../"

export default function BooksList(props: BooksShape) {  
  const {books} = props
  
  return (
    <>
      <Grid container spacing={0}>
        {books.map((item: BookShape, i: number) => {
          return <Grid 
                  key={`book_${i}`}
                  xs={12} md={6}
                  item>
                    <BookCard book={item}/>
                </Grid>
        })}
      </Grid>
    </>
  )
}
