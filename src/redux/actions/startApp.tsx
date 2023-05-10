import { AppThunk } from "../store"
import { setPwaKey } from "../../"

export const startApp =
  (app: any): AppThunk =>
  async (dispatch: any) => {
    try {
      // console.log("startApp app", app)
      dispatch(setPwaKey({ key: "started", value: true }))
      dispatch(setPwaKey({ key: "app", value: app }))
      
    } catch (error: any) {
      console.log("Action error: startApp", error)
    }
  }
