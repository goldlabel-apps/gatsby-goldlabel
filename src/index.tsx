import {usePwaDispatch} from "./hooks/usePwaDispatch"
import {usePwaSelect} from "./hooks/usePwaSelect"
import {useGQLMeta} from "./hooks/useGQLMeta"
import {useGQLGatsbyPages} from "./hooks/useGQLGatsbyPages"

import {makeImgSrc} from "./theme/utils"
import {makeTheme} from "./theme/makeTheme"
import {firebaseConfig} from "./firebaseConfig"

import Meta from "./components/Meta"
import Sitemap from "./components/Sitemap"
import Keywords from "./components/Keywords"
import NotFound from "./components/NotFound"
import LocaleMenu from "./components/LocaleMenu"
import Icon from "./components/Icon"
import {Font} from "./components/FontQuicksand"
import HeroClip from "./components/HeroClip"
import PWABar from "./components/PWABar"
import MuiTheme from "./components/MuiTheme"
import Slice from "./components/Slice"
import ImageMedia from "./components/ImageMedia"
import ContextNav from "./components/ContextNav"

import WrapRedux from "./redux/WrapRedux"
import {locales} from "./redux/locales"
import {selectPWA, setPwaKey} from "./redux/pwaReducer"
import {store} from "./redux/store"
import {persistor} from "./redux/store"
import { startApp } from "./redux/actions/startApp"
import { getAValue } from "./redux/actions/getAValue"
import { setLocale } from "./redux/actions/setLocale"
import { setSeo } from "./redux/actions/setSeo"
import { setOpen } from "./redux/actions/setOpen"
import { navigateTo } from "./redux/actions/navigateTo"

export {
  firebaseConfig,
  locales,
  store,
  persistor,
  setPwaKey,
  WrapRedux,
  MuiTheme,
  usePwaDispatch,
  usePwaSelect,
  useGQLGatsbyPages,
  makeTheme,
  Slice,
  PWABar,
  HeroClip,
  Icon,
  Font,
  Meta,
  Keywords,
  ContextNav,
  Sitemap,
  NotFound,
  LocaleMenu,
  ImageMedia,
  makeImgSrc,
  useGQLMeta,
  selectPWA,
  startApp,
  getAValue,
  setLocale,
  navigateTo,
  setSeo,
  setOpen,
}
