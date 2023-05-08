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
} from "../"

export default function Site() {

    
    const site = {
        cadsdfa:123,
    }

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
            window.open("/dakshd", "_self")
        }}>
        <Card>
            <CardHeader
                avatar={<Avatar />}
                title={ <Font variant="title">
                            Site
                        </Font>}
                subheader={<Font>
                            subheader
                        </Font>}
            />
    
            <pre>{JSON.stringify(site, null, 2)}</pre>
        </Card>
    </ButtonBase>
    </>
    )
}
