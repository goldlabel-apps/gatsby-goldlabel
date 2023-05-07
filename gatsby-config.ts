// import strapiConfig from "./strapi"
import type {GatsbyConfig} from "gatsby"

const siteTitle = "Goldlabel"
const siteIcon = "/svg/icons/goldenticket.svg"
const siteDescription = "Open Source Gatsby/Strapi Template"
const siteImage = "/jpg/strapi.jpg"
const siteTwitter = "@auto_machineV2"
const siteKeywords = "goldlabel, gatsby, strapi, pwa, listingslab, react, javascript"

const config: GatsbyConfig = {
  siteMetadata: {
    siteIcon,
    siteTitle,
    siteDescription,
    siteImage,
    siteKeywords,
    siteTwitter,
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
