import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import {
  WrapperShape,
} from "../types"
import {
  makeImgSrc,
  useGQLMeta,
  useGQLGatsbyPages,
  Keywords,
} from "../"
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Container,
  CardMedia,
  Grid,
  List,
  Typography,
  ListItemButton,
  ListItemText,
} from "@mui/material"

export default function PwaSeo(props: WrapperShape) {
  const gatsbyPages = useGQLGatsbyPages()
  let locale: string = "en"
  let title: string = "Default title"
  let description: string = "Default description"
  let keywords: string = "default, keywords"
  let og: string | null = null
  const {
    pageContext,
  } = props
  const meta = useGQLMeta()
  const {
    siteTitle,
    siteDescription,
    siteKeywords,
    siteImage,
    // siteTwitter,
  } = meta

  title = siteTitle
  description = siteDescription
  keywords = siteKeywords
  og = siteImage
  // twitter = siteTwitter
  
  const {special, instructions, book} = pageContext.data
  let appData: any = null
  
  if(pageContext){
    const {data} = pageContext    
    appData = data
  }

  if(special === "404"){
    title = instructions
  }

  if(special === "home"){
    title = ``
    description = siteDescription
    keywords = siteKeywords
  }

  if(special === "book"){
    if (book){
      // console.log("book", book)
      locale = book.locale
      title = book.title
      description = book.description
      keywords = book.keywords
      const {bookimage} = book
      if (bookimage){
        og = makeImgSrc(bookimage.url)
      }
    }
  }
  const showList = false

  return (<>
            <GatsbySeo 
              title={`${title} ${siteTitle}`}
              description={description}
            />
            <Container maxWidth="sm">

              <Grid container>

                <Grid item xs={12}>
                  <Card>
                    <CardHeader 

                      title={<Typography variant="h1" sx={{fontSize: "3rem"}}>
                              {title}
                            </Typography>}
                      subheader={<Typography variant="h2" sx={{fontSize: "2rem"}}>
                                  {description}
                                </Typography>}

                      action={<Avatar 
                        alt={`${title} ${description}`}
                        src={`/svg/localeflags/${locale}.svg`}
                      />}
                    />
                    {og ? <CardMedia 
                            component={"img"}
                            src={og} 
                            height={200}
                            alt={`${title} ${description}`}
                          /> : null }

                          <CardContent>
                            
                            <Keywords keywords={keywords}/>
                          </CardContent>
                    
                  </Card>
                </Grid>
                
                {showList ? <Grid item xs={12}>
                  <List dense>
                    { gatsbyPages.map((item: any, i: number) => {
                      let linkTitle = siteTitle
                      const {path, pageContext} = item.node
                      const {data} = pageContext
                      if (!data) return null
                      const { book } = data
                      if (book) linkTitle = book.title
                      // return null
                      return <ListItemButton 
                              key={`page_${i}`}
                              onClick={(e: React.MouseEvent) => {
                                e.preventDefault()
                                window.open(path, "_self")
                              }}>
                                <ListItemText 
                                  primary={linkTitle}
                                  secondary={path}
                                />
                            </ListItemButton>
                    })}
                  </List>
                </Grid> : null }

                

              </Grid>
             
            </Container>

          </>)
}

/*
<pre>meta {JSON.stringify(meta, null, 2)}</pre>
*/