import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"
import { 
  MetaShape,
  ThemeShape,
  KeyValueShape,
  PwaReduxShape,
} from "../types"

const meta: MetaShape = {
  title: "string",
  description: "string",
  keywords: "string",
  url: "string",
  canonical: "string",
  image: "string",
  twitter: "string",
}

const theme :ThemeShape = {
  title: "Purple",
  description: "People Eaters",
  primaryColor: "#32328C",
  secondaryColor: "#C09F52",
  font: "gotham",
  mode: "dark"
}

const initialState: PwaReduxShape = {
  started: false,
  locale: "en",
  theme,
  meta,
}

export const pwaSlice = createSlice({
  name: "pwa",
  initialState,
  reducers: {
    setPwaKey: (state, action: PayloadAction<KeyValueShape>) => {
      const { key, value } = action.payload
      // @ts-ignore
      state[key] = value
    },
  },
})

export const selectPWA = (state: RootState) => state
export const { setPwaKey } = pwaSlice.actions
export default pwaSlice.reducer
