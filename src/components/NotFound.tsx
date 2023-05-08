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

export default function NotFound() {


    return (
    <>
    <ButtonBase 
        sx={{
            mt:2,
            display:"block",
            textAlign: "left",
            width: "100%",
        }}
        onClick={(e: React.MouseEvent) => {
            e.preventDefault()
            console.log("Site")
            window.open("/?restart", "_self")
        }}>
            <CardHeader
                title={ <Font variant="title">
                            404
                        </Font>}
                subheader={<Font variant="description">
                                Restart?
                            </Font>}
            />
    </ButtonBase>
    </>
    )
}

/*
<pre>{JSON.stringify(site, null, 2)}</pre>
*/