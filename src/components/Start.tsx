import React from "react"
import {
    Avatar,
    Card,
    Grid,
    CardHeader,
    // ButtonBase,
    CardContent,
    CardActionArea,
} from "@mui/material"
import {
    Font,
    useGQLMeta,
    usePwaSelect,
    usePwaDispatch,
    selectPWA,
    startApp,
} from "../"

export default function Start(props: any) {
    const dispatch = usePwaDispatch()
    const {appData} = props
    const pwa = usePwaSelect(selectPWA)
    // const {app} = pwa
    const {locale} = pwa
    const site = useGQLMeta()
    const {
        siteTitle,
        siteDescription,
        siteIcon,
    } = site
    let localisedApp: any = null
    for (let i=0; i<appData.length; i++){
        if (locale === appData[i].node.locale) localisedApp = appData[i].node
    }


    React.useEffect(() => {
        const {started} = pwa
        // @ts-ignore
        if(!started) dispatch(startApp(localisedApp))
    }, [pwa])
  
    const {
        title,
        hostname,
        books,
    } = localisedApp

    return (
    <>
    
        <Card>
            <CardHeader
                avatar={<Avatar src={siteIcon} alt={`${title} ${siteDescription}`}/>}
                title={ <Font variant="title">
                            {title}
                        </Font>}
                subheader={<Font variant="description">
                                {hostname}
                            </Font>}
                action={<Avatar
                            sx={{
                                width: 25,
                                height: 25,
                            }} 
                            src={`/svg/flags/${locale}.svg`} alt=""/>}
            />
            {/* {books ? <CardContent>
                {books.length ? <>
                    <Grid container spacing={1} sx={{mt:1}}>
                        {books.map((item: any, i: number) => {
                            const {
                                title,
                                description,
                                slug,
                            } = item
                            return <Grid xs={12} md={6}
                                        key={`book_${i}`}
                                        item>
                                            <CardActionArea
                                                onClick={(e: React.MouseEvent) => {
                                                    e.preventDefault()
                                                    console.log("slug", slug)
                                                    // window.open("/?restart", "_self")
                                                }}
                                            >
                                                <CardHeader 
                                                    title={title}
                                                    subheader={description}    
                                                />
                                            </CardActionArea>    
                                    </Grid>
                            })}
                    </Grid>
                    </> : null }

            </CardContent> : null } */}
            
           
        </Card>
    </>
    )
}

/*

<ButtonBase 
        sx={{
            display:"block",
            textAlign: "left",
            width: "100%",
        }}
        >

<pre>{JSON.stringify(item, null, 2)}</pre>
<pre>{JSON.stringify(site, null, 2)}</pre>
*/