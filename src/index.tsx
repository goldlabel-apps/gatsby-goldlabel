import WrapRedux from "./app/WrapRedux"
import {usePwaDispatch} from "./hooks/usePwaDispatch"
import {usePwaSelect} from "./hooks/usePwaSelect"
import {makeTheme} from "./theme/makeTheme"
import SEO from "./app/SEO"
import Home from "./app/Home"
import Meta from "./components/Meta"
import Icon from "./components/Icon"
import HeroClip from "./components/HeroClip"
import BooksList from "./components/BooksList"
import PWABar from "./components/PWABar"
import MuiTheme from "./components/MuiTheme"
import Slice from "./components/Slice"
import BookCard from "./components/BookCard"
import BookPage from "./components/BookPage"
import ImageMedia from "./components/ImageMedia"
import {useGQLApp} from "./hooks/useGQLApp"
import {useGQLMeta} from "./hooks/useGQLMeta"
import {makeImgSrc} from "./app/utils"
import { selectPWA, setPwaKey } from "./redux/pwaReducer"
import {store} from "./redux/store"
import {persistor} from "./redux/store"
import { startApp } from "./redux/actions/startApp"
import { getAValue } from "./redux/actions/getAValue"
import { setLocale } from "./redux/actions/setLocale"
import { setSeo } from "./redux/actions/setSeo"
import { setOpen } from "./redux/actions/setOpen"
import { navigateTo } from "./redux/actions/navigateTo"

export {
  store,
  persistor,
  setPwaKey,
  WrapRedux,
  MuiTheme,
  usePwaDispatch,
  usePwaSelect,
  makeTheme,
  Slice,
  PWABar,
  HeroClip,
  SEO,
  Home,
  Icon,
  Meta,
  BooksList,
  BookCard,
  BookPage,
  ImageMedia,
  makeImgSrc,
  useGQLApp,
  useGQLMeta,
  selectPWA,
  startApp,
  getAValue,
  setLocale,
  navigateTo,
  setSeo,
  setOpen,
}
