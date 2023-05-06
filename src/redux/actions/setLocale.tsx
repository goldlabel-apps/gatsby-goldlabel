import { AppThunk } from "../store"
import { setPwaKey } from "../../"

export const setLocale =
  (locale: string): AppThunk =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "locale", value: locale }))
    } catch (error: any) {
      console.log("Action error: setLocale", error)
    }
  }
