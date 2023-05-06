import { AppThunk } from "../store"
import { setPwaKey } from "../../"

export const setSeo =
  (seo: any): AppThunk =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "seoData", value: seo }))
    } catch (error: any) {
      console.log("Action error: getAValue", error)
    }
  }
