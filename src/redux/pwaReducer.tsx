import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"
import {
  KeyValueShape,
  PwaReduxShape,
} from "../types"
import {
  locales,
  theme,
} from "../"

const initialState: PwaReduxShape = {
  started: false,
  sitemap: false,
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
