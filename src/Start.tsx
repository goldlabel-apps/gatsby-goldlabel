import React from "react"
import {
    Avatar,
    Card,
    CardHeader,
    CardMedia,
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
    } = localisedApp

    let appImage: string = "/svg/default.svg"
    if (image){
        appImage = makeImgSrc(image.url)
    }

  
    return (<>
        <Card>
            <CardHeader
                avatar={<Avatar src={siteIcon} alt={`${"title"} ${siteDescription}`}/>}
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
                height={315}
                src={appImage}
            />

        </Card>
    </>
    )
}

/* 
<pre>localisedApp: {JSON.stringify(localisedApp, null, 2)}</pre>
*/