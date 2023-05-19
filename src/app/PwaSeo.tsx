import React from "react"
import "../theme/default.css"
import { WrapperShape} from "../types"
import ReactMarkdown from "react-markdown"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import {
  Avatar,
  IconButton,
  Box,
  CardHeader,
  CardContent,
  Container,
  CardMedia,
  Grid,
} from "@mui/material"
import {
  makeImgSrc,
  useGQLMeta,
  Font,
  Sitemap,
  MuiTheme,
  WrapRedux,
  ContextNav,
  ListBooks,
} from "../"

export default function PwaSeo(props: WrapperShape) {
  const meta = useGQLMeta()
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
  let appData: any = null
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
                <Container maxWidth="lg" sx={{my:1}}>
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
                          subheader={<Font>
                                      {description}
                                    </Font>}/>
                        
                          <Grid container>

                            <Grid item xs={12} sm={8}>
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


                            <Grid item xs={12} sm={4}>
                              {showContextNav ? <ContextNav /> : null }
                              { og ? <CardContent><CardMedia 
                                  component={"img"}
                                  src={og} 
                                  height={200}
                                  alt={`${title} ${description}`}
                                /></CardContent> : null }  
                                {books ? <ListBooks books={books} /> : null }
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
