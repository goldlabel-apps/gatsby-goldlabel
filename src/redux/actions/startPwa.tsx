import { AppThunk } from "../store"
import { setPwaKey } from "../../"

export const startPwa =
  (strapi: any, hostname: string): AppThunk =>
  async (dispatch: any) => {
    try {
      let pwa: any = null
      let defaultLanguage = "en"
      const apps = strapi.allStrapiPwa.edges
      for (let i = 0; i < apps.length; i++) {
        const { node } = apps[i]
        let hn: null | string = null
        if (node.Host) {
          hn = node.Host.Hostname
        }
        const { locale } = node
        if (defaultLanguage === locale) {
          if (hn === hostname) {
            pwa = node
          }
        }
      }
      dispatch(setPwaKey({ key: "pwaData", value: pwa }))
      const pwas = strapi.allStrapiPwa.edges
      dispatch(setPwaKey({ key: "pwas", value: pwas }))
      const languages = strapi.allStrapiLanguage.edges
      dispatch(setPwaKey({ key: "languages", value: languages }))
      if (pwa) {
        const { Theme } = pwa
        if (Theme) {
          const { DefaultDark, Primary, Secondary, Title } = Theme
          // dispatch(
          //   setPwaKey({
          //     key: "theme",
          //     value: {
          //       title: Title,
          //       mode: DefaultDark ? "dark" : "light",
          //       primary: Primary,
          //       secondary: Secondary,
          //     },
          //   })
          // )
        }
      }
    } catch (error: any) {
      console.log("Action error: startPwa", error)
    }
  }
