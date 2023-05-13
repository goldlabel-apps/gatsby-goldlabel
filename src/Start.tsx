import React from "react"
import {
    Avatar,
    Card,
    CardHeader,
} from "@mui/material"
import {
    Font,
    useGQLMeta,
    usePwaSelect,
    usePwaDispatch,
    selectPWA,
    startApp,
} from "./"

export default function Start(props: any) {
    const dispatch = usePwaDispatch()
    const {appData} = props
    console.log("appData", appData)
    const pwa = usePwaSelect(selectPWA)
    const {locale} = pwa
    const site = useGQLMeta()
    const {
        siteDescription,
        siteIcon,
    } = site
    let localisedApp: any = {error:123}
    if(appData){
        localisedApp = appData.app
    }

    // let localisedApp: any = null
    // for (let i=0; i<appData.length; i++){
    //     if (locale === appData[i].node.locale) localisedApp = appData[i].node
    // }
    // if (!localisedApp) return null
    // const {
    //     title,
    //     hostname,
    // } = localisedApp

    React.useEffect(() => {
        const {started} = pwa
        // @ts-ignore
        // if(!started) dispatch(startApp(localisedApp))
    }, [pwa])
  
    return (<>
        <Card>
            <CardHeader
                avatar={<Avatar src={siteIcon} alt={`${"title"} ${siteDescription}`}/>}
                title={ <Font variant="title">
                            {"title"}
                        </Font>}
                subheader={<Font variant="description">
                                {"hostname"}
                            </Font>}
                action={<Avatar
                            sx={{
                                width: 25,
                                height: 25,
                                m:1,
                            }} 
                            src={`/svg/flags/${locale}.svg`} alt=""/>}
            />
            <pre>{JSON.stringify(localisedApp, null, 2)}</pre>
        </Card>
    </>
    )
}

/*

<pre>{JSON.stringify(site, null, 2)}</pre>
*/