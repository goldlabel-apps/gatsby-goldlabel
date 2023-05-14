import React from "react"
import {
    useMediaQuery,
    Avatar,
    Box,
    Card,
    CardContent,
    CardActions,
    CardActionArea,
    CardHeader,
    CardMedia,
    IconButton,
    // List,
    // ListItemButton,
    // ListItemText,
    Grid,
} from "@mui/material"
import {
    Icon,
    Font,
    useGQLMeta,
    usePwaSelect,
    // usePwaDispatch,
    selectPWA,
    LocaleMenu,
    makeImgSrc,
} from "./"

export default function Start(props: any) {
    // const dispatch = usePwaDispatch()

    const isMobile = !useMediaQuery("(min-width: 860px)")
    const {appData} = props
    // console.log("appData", appData)
    const pwa = usePwaSelect(selectPWA)
    const {locale} = pwa
    const site = useGQLMeta()
    const {
        siteDescription,
        siteIcon,
    } = site
    let localisedApp: any = {error:123}
    let appArr: any = null
    if(appData){
        appArr = appData.app.data.allStrapiApp.edges
        for (let i=0; i<appArr.length; i++){
            if (appArr[i].node.locale === locale) localisedApp = appArr[i].node
        }
    }
    if (!localisedApp) return null
    const {
        title,
        description,
        appimage,
        appicon,
        books,
    } = localisedApp

    let appIcon: string = siteIcon
    let image: string = "/svg/default.svg"
    let alternativeText: string = description
    if(appicon){
        appIcon = makeImgSrc(appicon.url)
    }

    if (appimage){
        image = makeImgSrc(appimage.url)
        alternativeText = appimage.alternativeText
    }
  
    return (<>
        <Card sx={{m:1}}>
            <CardHeader
                avatar={<IconButton
                            color="primary"
                            size={"small"}
                            onClick={(e: React.MouseEvent) => {
                                e.preventDefault()
                                window.open(`/`, "_self")
                            }}>
                            <Avatar src={appIcon} alt={`${title} ${siteDescription}`}/>
                        </IconButton>}
                title={ !isMobile ? <Font variant="title">
                            {title}
                        </Font> : null}
                action={<LocaleMenu />}
            />
            {isMobile ? <CardHeader 
                            title={<Font variant="title">
                                        {title}
                                    </Font>}
                            subheader={ <Font variant="description">
                                            {description}
                                        </Font>}
                        />
            
             : null }


            <CardMedia 
                component="img"
                alt={alternativeText}
                height={200}
                src={image}
            />

             <CardHeader
                subheader={ <Font variant="description">
                                {description}
                            </Font>}
            />

            
            </Card>
                {books ? <>
                    <Grid container>
                        { books.map((book: any, i: number) => {
                            const {
                            title,
                            description,
                            bookimage,
                            // slug,
                            } = book
                            return <Grid item xs={12} md={6} key={`book${i}`}>
                                        <Card sx={{m:1}}><CardActionArea
                                            onClick={(e: React.MouseEvent) => {
                                                e.preventDefault()
                                                // window.open(`/book/${slug}`, "_self")
                                            }}
                                        
                                        >
                                            <CardHeader 
                                                title={<Font variant="title">
                                                            {title}
                                                        </Font>}
                                                
                                            />
                                            { bookimage ? <CardMedia 
                                                                component="img"
                                                                alt={bookimage.alternativeText}
                                                                height={135}
                                                                src={makeImgSrc(bookimage.url)}
                                                            /> : null }
                                            <CardContent>
                                                <Font>{description}</Font>
                                            </CardContent>
                                        </CardActionArea>
                                        </Card>
                                    </Grid>
                        })}
                    </Grid>
                </> : null }
                <CardActions>
                    <Box sx={{flexGrow:1}}/>
                    <IconButton
                        onClick={(e: React.MouseEvent) => {
                            e.preventDefault()
                            window.open(`https://github.com/orgs/listingslab-goldlabel/repositories`, "_blank")
                        }}>
                        <Icon icon="github" />
                    </IconButton>
                    <Box sx={{flexGrow:1}}/>
                </CardActions>
        
    </>
    )
}

/* 
<pre>localisedApp: {JSON.stringify(localisedApp, null, 2)}</pre>
*/