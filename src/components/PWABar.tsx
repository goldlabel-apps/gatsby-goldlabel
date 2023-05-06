import {PWABarShape} from "../types"
import * as React from 'react'
import {
  styled, 
  alpha,
  Avatar,
  Container,
  AppBar,
  Box,
  IconButton,
  Toolbar,
  InputBase,
  Typography,
  Menu,
  MenuItem,
  Badge,
  Hidden,
} from "@mui/material"
import {
  Icon,
  makeImgSrc,
} from "../"

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

export default function PWABar(props: PWABarShape) {

  const { data } = props
  if (!data) return null
  
  const {
    title,
    description,
    icon,
  } = data
  let iAlt: string = description
  let iSrc: string = ""
  if (icon){
    iAlt = `${icon.alternativeText} ${description}`
    iSrc = makeImgSrc(icon.url)
  } 
  // console.log("iAlt", iAlt)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const isMenuOpen = Boolean(anchorEl)

  const handleSettingsMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const menuId = 'pwa-settings-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        You
      </MenuItem>

      <MenuItem onClick={handleMenuClose}>
        Us
      </MenuItem>
    </Menu>
  )

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
      <Container maxWidth="md">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={(e: React.MouseEvent) => {
              e.preventDefault()
              window.open(`/`, "_self")
            }}
          >
            <Avatar title={iAlt} src={iSrc} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{}}
          >
            {title}
          </Typography>
          
          <Box sx={{ flexGrow: 1 }} />
          <Hidden mdDown>
            <Search>
              <SearchIconWrapper>
                <Icon icon="search" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Hidden>

          <Box sx={{ display: { md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleSettingsMenuOpen}
              color="inherit"
            >
              <Badge badgeContent={0} color="primary">
                <Icon icon="settings"/>
              </Badge>
            </IconButton>
          </Box>
          
        </Toolbar>
        </Container>
      </AppBar>
      {renderMenu}
    </Box>
  )
}