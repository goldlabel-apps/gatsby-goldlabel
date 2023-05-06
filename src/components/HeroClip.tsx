import React from "react"
import {HeroData} from "../types"
import {
  useTheme,
  Card,
  Button,
  CardActions,
  CardHeader,
  Container,
  CardMedia,
  darken,
} from "@mui/material"
import {
  usePwaSelect,
  selectPWA,
  makeImgSrc,
  ImageMedia,
} from "../"

export default function HeroClip(props: HeroData) {
  const {hero} = props
  const pwa = usePwaSelect(selectPWA)
  const theme = useTheme()
  // 
  const {
    Title,
    Subheader,
    CTALabel,
    ClickURL,
    HeroImage,
  } = hero

  const bgColor = theme.palette.secondary.main
  // console.log("image", image)
  return (
      <>
        <Card sx={{
          // background: bgColor
        }}>
          <CardHeader 
            title={`${Title}`}
            subheader={Subheader}
          />
          { HeroImage ? <ImageMedia data={HeroImage} height={125} /> : null }
          <CardActions>
            <Button
              // fullWidth
              variant="contained"
              color="primary"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                window.open(ClickURL, "_self")
              }}
            >
              {CTALabel}
            </Button>
          </CardActions>
        </Card>
      </>
  )
}

/*
<pre style={{fontSize:11}}>{JSON.stringify(hero, null, 2)}</pre>
*/