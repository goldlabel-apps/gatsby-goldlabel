import * as React from "react"
import { 
  Box,
  Avatar,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material"
import { 
  makeImgSrc, 
  usePwaSelect, 
  usePwaDispatch, 
  selectPWA, 
  setLocale,
} from ".."

export default function LocaleMenu(props: any) {
  const { languages } = props
  const theme = useTheme()
  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()
  const { locale, locales } = pwa
  const borderColor = theme.palette.secondary.main

  return (<Box sx={{display: "flex"}}>
          { locales.map((item: any, i: number) => {
            const {
              code,
              displayName,
              localName,
              flag,
            } = item
            let isCurrent = false
            if (code === locale) isCurrent = true
            return <Box
                    key={`locale_${i}`}
                    sx={{
                      pb:1,
                      borderBottom: isCurrent ? "1px solid " + borderColor : null,
                    }}>
                    <Tooltip title={localName} >
                      <IconButton
                        size="small"
                        onClick={(e: React.MouseEvent) => {
                          e.preventDefault()
                          // @ts-ignore
                          if (!isCurrent) dispatch(setLocale(code))
                        }}>
                        <Avatar 
                          sx={{width: 24, height: 24}}
                          src={flag} 
                          alt={displayName} />
                      </IconButton>
                    </Tooltip>
                </Box>
          })}
    </Box>
  )
}
