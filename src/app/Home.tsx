import pJSON from "../../package.json"
import {
  WrapperShape,
} from "../types"
import React from "react"
import "../theme/default.css"
import {
  CssBaseline,
  Container,
} from "@mui/material"
import {
  // useGQLApp,
  makeTheme,
  SEO,
  PWABar,
  Slice,
  WrapRedux,
  MuiTheme,
  BooksList,
  HeroClip,
} from "../"

export default function Home(props: WrapperShape) {

  // console.log("props", props.pageContext.data)
  // const app = useGQLApp()
  // const locale = "en" // zh-CN || en
  // let localised: any = null
  // for (let i=0; i<app.length;i++){
  //   if (app[i].node.locale === locale) localised = app[i].node
  // }
  // const appMeta = localised.Meta


  // const customTheme = makeTheme("light", localised.Theme.Primary, localised.Theme.Secondary)

  // let booksData: any = null
  // let pwabarData: any = null
  // let heroData: any = null
  
  // const {
  //   AppIcon,
  //   Title,
  //   Description,
  //   Books,
  //   Hero,
  // } = localised
  
  // if (Hero) heroData = Hero
  // if (Books) booksData = Books
  
  // pwabarData = {
  //   title: Title,
  //   description: Description,
  //   icon: {...AppIcon},
  // }
  
  React.useEffect(() => {
    console.log(pJSON.name, pJSON.version)
  }, [])

  return (
    <>
      <WrapRedux>
        <SEO data={appMeta} />
          <MuiTheme>
            <CssBaseline />
            <PWABar data={pwabarData} />
            <Container maxWidth="md" sx={{mt:1}}>
              <Slice />
              {heroData ? <HeroClip hero={heroData} /> : null }
              {booksData.length ? <BooksList books={booksData} /> : null }
            </Container>
          </MuiTheme>
      </WrapRedux>
    </>
  )
}

/*
<pre style={{fontSize:11}}>{JSON.stringify(booksData, null, 2)}</pre>

{booksData ? <pre>{JSON.stringify(booksData, null, 2)}</pre> : null }
*/