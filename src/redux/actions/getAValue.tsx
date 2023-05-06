import { AppThunk } from "../store"
import { setPwaKey } from "../../"

export const getAValue =
  (key: string): AppThunk =>
  async (dispatch: any) => {
    try {
      console.log("getAValue", key)
      dispatch(setPwaKey({ key: "getAValue", value: true }))
    } catch (error: any) {
      console.log("Action error: getAValue", error)
    }
  }
