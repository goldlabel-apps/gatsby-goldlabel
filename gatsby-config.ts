// import strapiConfig from "./strapi"
import type {GatsbyConfig} from "gatsby"

const siteTitle = "Open Source Goldlabel"
const siteDescription = "Install Strapi"
const siteKeywords = "goldlabel, gatsby, strapi, pwa, listingslab, react, javascript"
const siteImage = "/svg/opengraphImage.svg"
const siteTwitter = "@auto_machineV2"
const siteIcon = "/svg/icons/goldenticket.svg"

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle,
    siteDescription,
    siteImage,
    siteKeywords,
    siteTwitter,
    siteIcon,
  },
  plugins: [
    // { 
    //   resolve: `gatsby-source-strapi`, 
    //   options: strapiConfig
    // },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteTitle,
        short_name: siteTitle,
        icon: `./static${siteIcon}`,
        start_url: `/`,
        background_color: `#C09F52`,
        theme_color: `#C09F52`,
        display: `standalone`,
      }
    },
    "gatsby-plugin-next-seo",
    {resolve: 'gatsby-plugin-offline'}
  ],
  jsxRuntime: `automatic`,
}

export default config
