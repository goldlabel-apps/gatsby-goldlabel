import React from "react"
import {
  Box,
  Button,
  CardActions,

} from "@mui/material"
import {
  Icon,
  Font,
} from "../"

export default function ContextNav(props: any) {
  const showBtnLabels = true
  return (<>
      <CardActions>
        <Box sx={{flexGrow:1}}/>
            <Button
              color="primary"
              variant="text">
                <Icon icon="left" />
                {showBtnLabels ? <Font style={{marginLeft: 8, marginRight: 8}}>
                  Back
                </Font>  : null }
            </Button>
            <Button
              color="primary"
              variant="text">
                <Icon icon="up" />
                {showBtnLabels ? <Font style={{marginLeft: 8, marginRight: 8}}>
                  Up
                </Font>  : null }
            </Button>
            <Button
              color="primary"
              variant="text">
                {showBtnLabels ? <Font style={{marginLeft: 8, marginRight: 8}}>
                  Next
                </Font>  : null }
                <Icon icon="right" />
            </Button>
            <Box sx={{flexGrow:1}}/>
          </CardActions>
    </>)
}
