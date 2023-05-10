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

/*
{books ? <CardContent>
                {books.length ? <>
                    <Grid container spacing={1} sx={{mt:1}}>
                        {books.map((item: any, i: number) => {
                            const {
                                title,
                                description,
                                slug,
                            } = item
                            return <Grid xs={12} md={6}
                                        key={`book_${i}`}
                                        item>
                                            <CardActionArea
                                                onClick={(e: React.MouseEvent) => {
                                                    e.preventDefault()
                                                    console.log("slug", slug)
                                                    // window.open("/?restart", "_self")
                                                }}
                                            >
                                                <CardHeader 
                                                    title={title}
                                                    subheader={description}    
                                                />
                                            </CardActionArea>    
                                    </Grid>
                            })}
                    </Grid>
                    </> : null }

            </CardContent> : null }
*/