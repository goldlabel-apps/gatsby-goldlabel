import { AppThunk } from "../store"
import { setPwaKey, navigateTo } from "../../"

export const setLocale =
  (locale: string): AppThunk =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "locale", value: locale }))
      // setTimeout(() => {
      //   dispatch(navigateTo(`/${locale}/`, "_self"))
      // }, 100)
      
    } catch (error: any) {
      console.log("Action error: setLocale", error)
    }
  }
