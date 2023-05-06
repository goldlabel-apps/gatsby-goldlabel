import { AppThunk } from "../store"
import { setPwaKey } from "../../"

export const navigateTo =
  (url: string, target?: string): AppThunk =>
  async (dispatch: any) => {
    try {
      // console.log("navigateTo", url, target)
      dispatch(
        setPwaKey({
          key: "route",
          value: {
            time: Date.now(),
            url,
            target,
          },
        })
      )
      window.open(url, target)
    } catch (error: any) {
      console.log("Action error: navigateTo", error)
    }
  }
