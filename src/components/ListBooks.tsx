import React from "react"
import {
  Box,
  ListItemText,
  ListItemButton,
  CardHeader,
  CardMedia,
  CardActionArea,
  List,
} from "@mui/material"
import {
  Icon,
  Font,
  makeImgSrc,
} from "../"

export default function ListBooks(props: any) {
  const {books} = props
  const showBookImages = false
  return (<>
          { books ? <><List>
            { books.map((item: any, i: number) => {
              const {
                title,
                slug,
                bookogimg,
                bookdocs,
              } = item

              return <Box 
                        key={`book_${i}`}
                        sx={{m:1}}>
                        <CardActionArea
                          onClick={(e: React.MouseEvent) => {
                            e.preventDefault()
                            window.open(`/book/${slug}`, "_self")
                          }}>
                            {bookogimg && showBookImages ? <CardMedia 
                              component={"img"}
                              height={100}
                              alt={bookogimg.alternativeText}
                              src={makeImgSrc(bookogimg.url)}
                            /> : null }
                            <CardHeader 
                              avatar={<Icon icon="book" color="primary"/>}
                              title={<Font>
                                      {title}
                                    </Font>}/>
                          </CardActionArea>
                          {bookdocs.length ? <>
                            { bookdocs.map((doc: any, i: number) => {
                              const {
                                title,
                                slug,
                                description,
                              } = doc
                              return <ListItemButton
                                        key={`doc_${i}`}
                                        onClick={(e: React.MouseEvent) => {
                                          e.preventDefault()
                                          window.open(`/doc/${slug}`, "_self")
                                        }}>
                                        <ListItemText 
                                          primary={<Font>
                                                    {title}
                                                  </Font>}
                                          secondary={<Font>
                                                      {description}
                                                    </Font>}
                                        />
                                      </ListItemButton>
                            }) }
                          </> : null }
                    </Box>
            })}
          </List></> : null }
    </>)
}
