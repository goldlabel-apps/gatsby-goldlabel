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
  Icon,
  Sitemap,
} from "../"
import {
  Box,
  Button,
  Avatar,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Container,
  CardMedia,
  Grid,
  List,
  Typography,
  ListItemButton,
  ListItemText,
} from "@mui/material"

export default function PwaSeo(props: WrapperShape) {
  let locale: string = "en"
  let title: string = "Default title"
  let description: string = "Default description"
  let keywords: string = "default, keywords"
  let url: string = ""
  let og: string = ""
  const {
    pageContext,
  } = props

  
  
  const meta = useGQLMeta()
  const {
    siteUrl,
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
  
  const {special, instructions, book, path} = pageContext.data

  url = `${siteUrl}${path}`

  let appData: any = null
  
  if(pageContext){
    const {data} = pageContext    
    appData = data
  }

  if(special === "404"){
    title = instructions
  }

  if(special === "home"){
    description = siteDescription
    keywords = siteKeywords
  }

  if(special === "book"){
    if (book){
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
  const showActions = false

  
  // !! <html> element does not have a [lang] attribute
  return (<>
            <GatsbySeo 
              title={`${title} ${special !== "home" ? siteTitle : siteDescription}`}
              description={description}
              openGraph={{
                type: 'website',
                url,
                title,
                description,
                images: [
                  {
                    url: og,
                  },
                ],
              }}
            />
            <Container maxWidth="sm">
              <Sitemap />
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
                            <Typography variant="body2">
                              {url}
                            </Typography>
                            <Keywords keywords={keywords}/>
                          </CardContent>

                      {showActions ? <CardActions>
                        <Box sx={{flexGrow:1}}/>
                            <Button
                              color="primary"
                              variant="text">
                                <Icon icon="left" />
                                <span style={{marginLeft: 8, marginRight: 8}}>
                                  Back
                                </span> 
                            </Button>

                            <Button
                              color="primary"
                              variant="text">
                                <Icon icon="up" />
                                <span style={{marginLeft: 8, marginRight: 8}}>
                                  Up
                                </span> 
                            </Button>
                            
                            <Button
                              color="primary"
                              variant="text">
                                <span style={{marginLeft: 8, marginRight: 8}}>
                                  Forward
                                </span> 
                                <Icon icon="right" />
                            </Button>
                            <Box sx={{flexGrow:1}}/>
                          </CardActions> : null }

                          
                    
                  </Card>
                </Grid>
                
                
              </Grid>
             
            </Container>

          </>)
}

/*
  <pre>meta {JSON.stringify(meta, null, 2)}</pre>
*/