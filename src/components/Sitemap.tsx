import React from "react"
import {
  List,
  ListItemButton,
  ListItemText,
  CardMedia,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material"
import {useGQLGatsbyPages, Icon} from "../"

export default function Sitemap() {

    const gatsbyPages = useGQLGatsbyPages()


    return (<>
      <Accordion>
        <AccordionSummary
          expandIcon={<Icon icon="acc" />}
          aria-controls="panel1a-content"
          id="sitemap"
        >
          <Typography>Sitemap</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List dense>
            { gatsbyPages.map((item: any, i: number) => {
              let linkTitle: any = null
              const {path, pageContext} = item.node
              const {data} = pageContext
              if (!data) return null
              const { book } = data
              if (book) linkTitle = book.title
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
          </AccordionDetails>
      </Accordion>
    </>)
}

/*
<Typography>
            <pre>
              {JSON.stringify(gatsbyPages, null, 2)}
            </pre>
          </Typography>
*/