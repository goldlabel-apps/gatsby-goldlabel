import React from "react"
import {
  TwitterShareButton,
} from "react-share"
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Link,
  IconButton,
  Grid,
} from "@mui/material"
import {
  Icon,
  ImageMedia,
} from "../"

export default function Meta(props: any) {
  const {data} = props
  const {
    SiteTitle,
    Description,
    Keywords,
    Twitter,
    URL,
    Canonical,
    OGImage,
  } = data
  const [open, setOpen] = React.useState<boolean>(false)

  if (!open){
    return <IconButton
    onClick={(e: React.MouseEvent) => {
      e.preventDefault()
      setOpen(true)
    }}>
    <Icon icon="meta" />
  </IconButton>
  }

  return (
    <>
      <Card sx={{}} >
        <CardHeader 
          avatar={<Icon icon="meta" color="primary"/>}
          action={<IconButton
                    color="primary"
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault()
                      setOpen(false)
                    }}>
                    <Icon icon="close" />
                  </IconButton>}
          title={ <Typography variant="button">
                    SEO Meta Tags
                  </Typography>}
        />
        <CardContent>

          <Grid container spacing={2}>

            <Grid item xs={12}>
                <Typography gutterBottom>
                  Correct Meta Tags are crucial for Search visibility. 
                  This is what the SEO looks like for this page. Test that theory 
                  by sharing it on twitter...
                <TwitterShareButton url={window.location.href}>
                  <Icon icon="twitter"/>
                </TwitterShareButton>
              </Typography>
              
            </Grid>

            <Grid item xs={12} md={4}>

              <Typography variant="button">
                URL
              </Typography>
              <Typography variant="body2" gutterBottom>
                <Link sx={{color: "white"}} href={URL}>
                  {URL}
                </Link>
              </Typography>

              <Typography variant="button">
                Canonical
              </Typography>
              <Typography variant="body2" gutterBottom>
                <Link sx={{color: "white"}} href={Canonical}>
                  {Canonical}
                </Link>
              </Typography>

              
              <Typography variant="button">
                Site Title
              </Typography>
              <Typography variant="body2" gutterBottom>
                {SiteTitle}
              </Typography>

              <Typography variant="button">
                Description
              </Typography>
              <Typography variant="body2" gutterBottom>
                {Description}
              </Typography>

              <Typography variant="button">
                Keywords
              </Typography>
              <Typography variant="body2" gutterBottom>
                {Keywords}
              </Typography>

              <Typography variant="button">
                Twitter
              </Typography>
              <Typography variant="body2" gutterBottom>
                {Twitter}
              </Typography>
            </Grid>


            <Grid item xs={12} md={8}>
              {OGImage ? <>
                      <Typography variant="button">
                        Open Graph Image
                      </Typography>
                      <ImageMedia data={OGImage} />
                    </> : null }
            </Grid>

            
          </Grid>

        </CardContent>
      </Card>
    </>
  )
}
