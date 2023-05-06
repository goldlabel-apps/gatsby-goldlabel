import React from "react"
import {
  CardHeader,
  CardContent,
  Typography,
  Card,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material"
import {
  Icon,
  ImageMedia,
} from "../"

export default function BookPage(props: any) {
  const {data} = props
  const {
    Title,
    Description,
    Image,
    Documents,
  } = data

  // console.log("data", data)

  return (
    <>
      <Card>
        <CardHeader
          avatar={<IconButton
                    color="primary"
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault()
                      window.open(`/books`, "_self")
                    }}
                  >
                    <Icon icon="left" />
                  </IconButton>}
          title={ <Typography variant="h6">
                    {Title}
                  </Typography>}
          subheader={<Typography>
                      {Description}
                    </Typography>}
        />
        <CardContent>
          {Image ? <ImageMedia data={Image} height={250} /> : null }

          {Documents ? <>
            <List>
              {Documents.map((item: any, i: number) => {
                const {
                  Title,
                  Description,
                } = item
                return <ListItemButton
                          key={`document_${i}`}
                        >
                          <ListItemText 
                            primary={Title}
                            secondary={Description}
                          />
                        </ListItemButton>
              })}
            </List>
          </> : null }
        </CardContent>
        </Card>
    </>
  )
}

/*
<pre>{JSON.stringify(item, null, 2)}</pre>
*/