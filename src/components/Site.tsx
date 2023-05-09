// import {BookData} from "../types"
import React from "react"
import {
    Avatar,
    IconButton,
    Card,
    CardHeader,
    Typography,
    ButtonBase,
} from "@mui/material"
import {
    Font,
    useGQLMeta,
} from "../"

export default function Site() {
    const site = useGQLMeta()

    const {
        siteTitle,
        siteDescription,
        siteIcon,
    } = site

    return (
    <>
    <ButtonBase 
        sx={{
            display:"block",
            textAlign: "left",
            width: "100%",
        }}
        onClick={(e: React.MouseEvent) => {
            e.preventDefault()
            console.log("Site")
            window.open("/?restart", "_self")
        }}>
        <Card>
            <CardHeader
                avatar={<Avatar src={siteIcon} alt={`${siteTitle} ${siteDescription}`}/>}
                title={ <Font variant="title">
                            {siteTitle}
                        </Font>}
                subheader={<Font variant="description">
                                {siteDescription}
                            </Font>}
            />
        </Card>
    </ButtonBase>
    </>
    )
}

/*
<pre>{JSON.stringify(site, null, 2)}</pre>
*/