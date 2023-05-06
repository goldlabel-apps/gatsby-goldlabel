import { AppThunk } from "../store"
import { setPwaKey } from "../../"

export const startApp =
  (): AppThunk =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "started", value: true }))
      dispatch(setPwaKey({ key: "persisted", value: true }))
    } catch (error: any) {
      console.log("Action error: startApp", error)
    }
  }
