import React from "react"
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
} from "@mui/material"
import {
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
    const {appData} = props
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
        image,
        icon,
        books,
    } = localisedApp

    let appIcon: string = siteIcon
    let appImage: string = "/svg/default.svg"
    let alternativeText: string = description
    if(icon){
        appIcon = makeImgSrc(icon.url)
    }

    if (image){
        appImage = makeImgSrc(image.url)
        alternativeText = image.alternativeText
    }
  
    return (<>
        <Card>
            <CardHeader
                avatar={<IconButton
                            color="primary"
                            size={"small"}
                            onClick={(e: React.MouseEvent) => {
                                e.preventDefault()
                                window.open(`/?home`, "_self")
                            }}>
                            <Avatar src={appIcon} alt={`${title} ${siteDescription}`}/>
                        </IconButton>}
                title={ <Font variant="title">
                            {title}
                        </Font>}
                subheader={<Font variant="description">
                                {description}
                            </Font>}
                action={<LocaleMenu />}
            />
            <CardMedia 
                component="img"
                alt={alternativeText}
                height={270}
                src={appImage}
            />
            <CardContent>
                {books ? <>
                    <pre>localisedApp: {JSON.stringify(books, null, 2)}</pre>
                </> : null }
            </CardContent>

        </Card>
        
    </>
    )
}

/* 
<pre>localisedApp: {JSON.stringify(localisedApp, null, 2)}</pre>
*/