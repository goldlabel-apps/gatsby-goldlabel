import React from "react"
import "../theme/default.css"
import { WrapperShape} from "../types"
import ReactMarkdown from "react-markdown"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import {
  makeImgSrc,
  useGQLMeta,
  Font,
  Icon,
  Sitemap,
  MuiTheme,
  WrapRedux,
  LocaleMenu,
} from "../"
import {
  Avatar,
  IconButton,
  Box,
  Button,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Container,
  CardMedia,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,

} from "@mui/material"

export default function PwaSeo(props: WrapperShape) {
  let locale: string = "en"
  let title: string = ""
  let seotitle: string = ""
  let description: string = ""
  let keywords: string = ""
  let url: string = ""
  let og: string = ""
  let avatar: string = ""
  let twitter: string = "@"
  let body: any = false
  let books: Array<any> = false
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
    siteTwitter,
  } = meta
  twitter = siteTwitter
  title = siteTitle
  description = siteDescription
  keywords = siteKeywords
  avatar = siteIcon  
  const {special, instructions, book, path, localised} = pageContext.data

  if (localised){
    // console.log("localised", localised)
    books = localised.books
  }


  url = `${siteUrl}${path}`
  let appData: any = null

  if(pageContext){
    const {data} = pageContext
    // console.log("data", data) 
    appData = data
  }
  // console.log("appData", appData)
  // const {apps} = appData

  if(special === "404"){
    title = instructions
    seotitle =  `${instructions} ${siteTitle}`
  }

  if(special === "book"){
    if (book){
      locale = book.locale
      title = book.title
      seotitle =  `${book.title} ${siteDescription}`
      description = book.description
      keywords = book.keywords
      const {bookimage} = book
      if (bookimage){
        og = makeImgSrc(bookimage.url)
      }
    }
  }

  if(special === "home"){
    title = localised.title
    seotitle =  `${localised.title} ${localised.description}`
    description = localised.description
    keywords = siteKeywords
    body = localised.appbody.data.appbody
    og = makeImgSrc(localised.appimage.url)
  }

  const showActions = false
  const showLabels = false

  return (<>
            <GatsbySeo 
              title={seotitle}
              description={description}
              canonical={siteUrl}
              twitter={{
                handle: twitter,
                site: twitter,
                cardType: 'summary_large_image',
              }}
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
              }}/>

            <WrapRedux>
              <MuiTheme>
                <Container maxWidth="md" sx={{my:1}}>
                  <Box sx={{display: "none"}}>
                    <Sitemap 
                      options={{
                        defaultExpanded: special === "home" || special === "404" ? false : false,
                      }}
                    />
                  </Box>
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
                          // action={<>
                          //       <Box sx={{display:"flex"}}>
                          //         <LocaleMenu />
                          //       </Box>
                          //     </>}
                        />
                        
                        <Grid container>

                          <Grid item xs={12} md={7}>
                            
                            { og ? <CardContent><CardMedia 
                                component={"img"}
                                src={og} 
                                height={200}
                                alt={`${title} ${description}`}
                              /></CardContent> : null }  

                              {body ? <>
                                  <CardContent>
                                    <Font>
                                    <ReactMarkdown>
                                      {body}
                                    </ReactMarkdown>
                                    </Font>
                                  </CardContent>
                                </> : null }  

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
                          </Grid>

                          <Grid item xs={12} md={5}>
                              { books ? <>
                              <List>
                                { books.map((item: any, i: number) => {
                                  const {
                                    title,
                                    description,
                                    slug,
                                  } = item
                                  return <ListItemButton
                                            key={`book_${i}`}
                                            onClick={(e: React.MouseEvent) => {
                                              e.preventDefault()
                                               window.open(`/book/${slug}`, "_self")
                                            }}
                                          >
                                            <ListItemIcon>
                                              <Icon icon="book" color="primary"/>
                                            </ListItemIcon>
                                            <ListItemText 
                                              primary={<Font variant="subheader">
                                                        {title}
                                                      </Font>}
                                              secondary={<Font>
                                                          {description}
                                                        </Font>}
                                            />
                                        </ListItemButton>
                                })}
                              </List>
                              </> : null }

                          </Grid>

                        </Grid>                        
                          
                          
                           
                        </Card>            
                            
                    </Grid>
                  </Grid>
                </Container>
              </MuiTheme>
            </WrapRedux>
          </>)
}

export function Head() {
  const locale = "en"
  return (
    <>
      <html lang={locale} />
    </>
  )
}

/*
<pre>{JSON.stringify(apps, null, 2)}</pre> 
*/