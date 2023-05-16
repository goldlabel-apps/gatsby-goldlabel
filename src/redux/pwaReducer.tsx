import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"
import { 
  // MetaShape,
  ThemeShape,
  KeyValueShape,
  PwaReduxShape,
} from "../types"
import {locales} from "../"

const theme: ThemeShape = {
  title: "Purple",
  description: "People Eaters",
  primaryColor: "#C09F52",
  secondaryColor: "#C09F52",
  font: "gotham",
  mode: "light",  
}

const initialState: PwaReduxShape = {
  started: false,
  locale: "en",
  theme,
  locales,
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
