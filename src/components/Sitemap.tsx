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
  Icon,
  Font,
} from "../"

export default function Sitemap(props: any) {
    const {options} = props
    let dO = false
    const {defaultExpanded} = options
    if (defaultExpanded) dO = true
    const gatsbyPages = useGQLGatsbyPages()

    return (<>
      <Accordion defaultExpanded={dO} sx={{border: "none", boxShadow: "none"}}>
        <AccordionSummary
          sx={{border: "none", boxShadow: "none"}}
          expandIcon={<Icon icon="acc" color="primary" />}
          aria-controls="panel1a-content"
          id="sitemap"
        />
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
                case "book":
                  icon = "book"
                  break

                case "app":

                  icon = "code"
                  linkTitle = data.path
                  break
                
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
                          primary={<Font>{linkTitle}</Font>}
                          secondary={path}
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