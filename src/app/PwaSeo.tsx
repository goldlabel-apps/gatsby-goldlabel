import React from "react"
import "../theme/default.css"
import { WrapperShape} from "../types"
import ReactMarkdown from "react-markdown"
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
  useGQLMeta,
  Font,
  Sitemap,
  MuiTheme,
  WrapRedux,
  ContextNav,
  ServerSideRender,
  LocaleMenu,
} from "../"

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
  let demo: any = null

  const meta = useGQLMeta()
  const showContextNav = false
  const {pageContext} = props
  const {data} = pageContext
  demo = data.demo
  locale = data.locale
  const {special, instructions, path} = pageContext.data
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
  url = `${siteUrl}${path}`

  if(special === "404"){
    title = instructions
    seotitle =  `${instructions} ${siteTitle}`
  }

  let localised: any = {
    not: "found",
    locale,
    
  } 
  for(let i=0; i< demo.length; i++){
    if (locale === demo[i].node.locale){
      localised = demo[i].node
    }
  }
  // localise(list, locale)

  if(localised){
    title = localised.title
    seotitle =  localised.title
    description = localised.description
    keywords = localised.keywords
    if (localised.body){
      body = localised.body.data.body
    }
    
  }
  
  return (<>
            <ServerSideRender 
              title={seotitle}
              description={description}
              canoical={siteUrl}
              url={url}
              og={og}
              locale={locale}
              twitter={twitter}
            />

            <WrapRedux>
              <MuiTheme>
                <Container maxWidth="lg" sx={{my:1}}>
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
                                    </Font>}
                          action={<><LocaleMenu thisLocale={locale}/></>}            
                        />
                          <Grid container>
                            <Grid item xs={12} sm={8}>
                              
                              {/* <pre>{JSON.stringify(localised, null, 2)}</pre>  */}

                              <Grid container>  
                                {og ? <Grid item xs={12}>
                                  <CardMedia 
                                    component={"img"}
                                    src={og} 
                                    height={200}
                                    alt={`${title} ${description}`}
                                  />
                                </Grid> : null }
                                {body ? <>
                                  <Grid item xs={12}>
                                    <CardContent>
                                      <Font>
                                        <ReactMarkdown>
                                          {body}
                                        </ReactMarkdown>
                                      </Font>
                                    </CardContent>
                                  </Grid>
                                </> : null }
                              </Grid>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Box sx={{}}>
                                <Sitemap 
                                  options={{
                                    defaultExpanded: special === "home" || special === "404" ? false : false,
                                  }}
                                />
                              </Box>
                              {showContextNav ? <ContextNav /> : null }
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
