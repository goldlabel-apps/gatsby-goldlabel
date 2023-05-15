import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import {
  WrapperShape,
} from "../types"
import {
  useGQLMeta,
  useGQLGatsbyPages,
} from "../"

import {
  Container,
  List,
  ListItemText,
  ListItemButton,
} from "@mui/material"


export default function PwaSeo(props: WrapperShape) {
  const gatsbyPages = useGQLGatsbyPages()
  console.log("gatsbyPages", gatsbyPages)
  let locale: string = "en"
  let title: string = "Default title"
  let description: string = "Default description"
  let keywords: string = "default, keywords"
  let og: string | null = null
  let twitter: string | null = null
  const {
    pageContext,
  } = props
  const meta = useGQLMeta()
  const {
    siteTitle,
    siteDescription,
    siteKeywords,
    siteImage,
    siteTwitter,
  } = meta

  title = siteTitle
  description = siteDescription
  keywords = siteKeywords
  og = siteImage
  twitter = siteTwitter
  
  const {special, instructions} = pageContext.data
  let appData: any = null
  
  if(pageContext){
    const {data} = pageContext    
    appData = data
  }

  if(special === "404"){
    title = instructions
  }

  if(special === "home"){
    title = `${siteTitle}`
    description = siteDescription
    keywords = siteKeywords
  }

  return (<>
            <GatsbySeo 
              title={title}
              description={description}
            />
            <Container maxWidth="sm">
              <h1>{title}</h1>
              <h2>{description}</h2>
              {og ? <img src={og} width={300} /> : null }
              <p>{keywords}</p>
              <List dense>
                { gatsbyPages.map((item: any, i: number) => {
                  const {path} = item.node
                  return <ListItemButton key={`page_${i}`}>
                          {path}  
                        </ListItemButton>

                })}
              </List>
            </Container>

          </>)
}

/*

ALSO USE gatsby built in HEAD API for keywords

<pre>meta {JSON.stringify(meta, null, 2)}</pre>
*/