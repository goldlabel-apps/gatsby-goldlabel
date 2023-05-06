import { AppThunk } from "../store"
import { setPwaKey } from "../../"

export const setOpen =
  (open: boolean): AppThunk =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "open", value: open }))
    } catch (error: any) {
      console.log("Action error: setOpen", error)
    }
  }
