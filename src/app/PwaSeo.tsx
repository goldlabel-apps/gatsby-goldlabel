import React from "react"
import "../theme/default.css"
import { WrapperShape} from "../types"
import ReactMarkdown from "react-markdown"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import {
  Avatar,
  IconButton,
  Box,
  Button,
  CardHeader,
  CardActions,
  CardContent,
  CardActionArea,
  Container,
  CardMedia,
  Grid,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material"
import {
  makeImgSrc,
  useGQLMeta,
  Font,
  Icon,
  Sitemap,
  MuiTheme,
  WrapRedux,
  ContextNav,
} from "../"

export default function PwaSeo(props: WrapperShape) {
  const meta = useGQLMeta()
  
  const showBookImages = false
  const showContextNav = false

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
  let books: Array<any> = []
  const {
    pageContext,
  } = props
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
    books = localised.books
  }
  url = `${siteUrl}${path}`
  let appData: any = null
  if(pageContext){
    const {data} = pageContext
    appData = data
  }
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
      if (bookimage) og = makeImgSrc(bookimage.url)
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
                      <Box>
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
                        />
                        
                          <Grid container>
                            <Grid item xs={12} md={7}>
                              {showContextNav ? <ContextNav /> : null }
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
                            </Grid>

                            <Grid item xs={12} md={5}>
                                { books ? <><List>
                                  { books.map((item: any, i: number) => {
                                    const {
                                      title,
                                      description,
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
                                                            />
                                                          </ListItemButton>
                                                }) }
                                              </> : null }
                                          </Box>
                                          
                                  })}
                                </List></> : null }

                            </Grid>

                          </Grid>                        
                          
                        </Box>
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