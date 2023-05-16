import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import {
  WrapperShape,
} from "../types"
import {
  makeImgSrc,
  useGQLMeta,
  Font,
  Icon,
  Sitemap,
  MuiTheme,
  WrapRedux,
} from "../"
import {
  Avatar,
  IconButton,
  Box,
  Button,
  Card,
  CardHeader,
  CardActions,
  Container,
  CardMedia,
  Grid,
} from "@mui/material"

export default function PwaSeo(props: WrapperShape) {
  let locale: string = "en"
  let title: string = "Default title"
  let description: string = "Default description"
  let keywords: string = "default, keywords"
  let url: string = ""
  let og: string = ""
  let avatar: string = ""
  const {
    pageContext,
  } = props
  
  const meta = useGQLMeta()
  const {
    siteUrl,
    siteTitle,
    siteDescription,
    siteKeywords,
    siteIcon,
  } = meta
  title = siteTitle
  description = siteDescription
  keywords = siteKeywords
  avatar = siteIcon  
  const {special, instructions, book, path} = pageContext.data
  url = `${siteUrl}${path}`
  let appData: any = null
  if(pageContext){
    const {data} = pageContext    
    appData = data
  }

  if(special === "home"){
    description = siteDescription
    keywords = siteKeywords
  }

  if(special === "404"){
    title = instructions
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
  const showActions = true
  const showLabels = false

  
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
            <WrapRedux>
              <MuiTheme>
                <Container maxWidth="sm" sx={{my:1}}>
                  
                  <Grid container>
                    <Grid item xs={12}>
                      <Card>
                        <CardHeader 
                          avatar={<IconButton
                                    onClick={(e: React.MouseEvent) => {
                                      e.preventDefault()
                                      window.open(`/`, "_self")
                                  }}>
                                    <Avatar src={avatar} alt={description}/>
                                  </IconButton>}
                          title={<Font variant="title">
                                  {title}
                                </Font>}
                          subheader={<Font variant="subheader">
                                      {description}
                                    </Font>}
                          action={<Avatar 
                                    sx={{width: 16, height: 16}}
                                    alt={`${title} ${description}`}
                                    src={`/svg/localeflags/${locale}.svg`}
                                  />}
                        />
                        { og ? <CardMedia 
                                component={"img"}
                                src={og} 
                                height={200}
                                alt={`${title} ${description}`}
                              /> : null }    
                        
                        {showActions ? <CardActions>
                            <Box sx={{flexGrow:1}}/>
                                <Button
                                  color="primary"
                                  variant="text">
                                    <Icon icon="left" />
                                    {showLabels ? <Font style={{marginLeft: 8, marginRight: 8}}>
                                      Back
                                    </Font>  : null }
                                    
                                </Button>

                                <Button
                                  color="primary"
                                  variant="text">
                                    <Icon icon="up" />
                                    {showLabels ? <Font style={{marginLeft: 8, marginRight: 8}}>
                                      Up
                                    </Font>  : null }
                                    
                                </Button>
                                
                                <Button
                                  color="primary"
                                  variant="text">
                                    
                                    {showLabels ? <Font style={{marginLeft: 8, marginRight: 8}}>
                                      Next
                                    </Font>  : null }
                                    <Icon icon="right" />
                                </Button>
                                <Box sx={{flexGrow:1}}/>
                              </CardActions> : null }
                          <Sitemap />
                        </Card>                  
                    </Grid>
                  </Grid>
                </Container>
              </MuiTheme>
            </WrapRedux>
          </>)
}

/*

<CardContent>
  <Keywords keywords={keywords}/>
</CardContent>
                          
  <pre>meta {JSON.stringify(meta, null, 2)}</pre>
*/