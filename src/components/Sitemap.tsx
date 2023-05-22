import React from "react"
import {
  List,
  ListItemButton,
  ListItemText,
  Accordion,
  AccordionSummary,
  ListItemIcon,
  AccordionDetails,
} from "@mui/material"
import {
  useGQLGatsbyPages, 
  usePwaSelect,
  selectPWA,
  Icon,
  Font,
  
} from "../"

export default function Sitemap(props: any) {
    
    const pwa = usePwaSelect(selectPWA)
    
    const {sitemap} = pwa

    // console.log("sitemap", sitemap)

    // const {options} = props
    // let dO = false
    // const {defaultExpanded} = options
    // if (defaultExpanded) dO = true
    const gatsbyPages = useGQLGatsbyPages()

    return (<>
      <Accordion 
        defaultExpanded={sitemap} 
        sx={{border: "none", 
        boxShadow: "none",
      }}>
      
        <AccordionSummary
          id="sitemap"
          sx={{border: "none", boxShadow: "none"}}
          expandIcon={<Icon icon="acc" color="primary" />}
          aria-controls="sitemap-content">
          Sitemap
        </AccordionSummary>
        <AccordionDetails sx={{border: "none", boxShadow: "none"}}>
          <List dense>
            { gatsbyPages.map((item: any, i: number) => {
              let linkTitle: any = null
              const {path, pageContext} = item.node
              const {data} = pageContext
              if (!data) return null
              const { book, special } = data
              if (book) linkTitle = book.title
              let icon = "link"
              switch (special) {
                case "home":
                  icon = "home"
                  linkTitle = "Home"
                  break
                case "404":
                  icon = "help"
                  linkTitle = "404"
                  break
              }

              return <ListItemButton 
                      key={`page_${i}`}
                      onClick={(e: React.MouseEvent) => {
                        e.preventDefault()
                        window.open(path, "_self")
                      }}>
                        <ListItemIcon>
                          <Icon icon={icon} color="primary"/> 
                        </ListItemIcon>
                        <ListItemText 
                          // primary={<Font>{linkTitle}</Font>}
                          secondary={<Font>{path}</Font>}
                        />
                    </ListItemButton>
              })}
            </List>
          </AccordionDetails>
      </Accordion>
    </>)
}

/*

<IconButton
                                      onClick={(e: React.MouseEvent) => {
                                          e.preventDefault()
                                          window.open(`https://github.com/listingslab-goldlabel/gatsby-goldlabel`, "_blank")
                                      }}>
                                      <Icon icon="github" />
                                  </IconButton>
                                  
<Typography>
  <pre>
    {JSON.stringify(gatsbyPages, null, 2)}
  </pre>
</Typography>
*/