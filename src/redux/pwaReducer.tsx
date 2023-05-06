import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"
import { 
  ThemeShape,
  KeyValueShape,
  PwaReduxShape,
} from "../types"

const theme :ThemeShape = {
  id: "default",
  locale: "en",
  Title: "Goldlabel",
  Primary: "#C09F52",
  Secondary: "#A58438",
  Font: "gotham",
  LightBackground: "#FFFDEF",
  DefaultDark: false
}

const initialState: PwaReduxShape = {
  started: false,
  locale: "en",
  theme,
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
