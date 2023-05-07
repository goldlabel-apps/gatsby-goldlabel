import strapiConfig from "./strapi"
import type {GatsbyConfig} from "gatsby"

const siteTitle = "Goldlabel Open Source"
const siteIcon = "/svg/icons/goldenticket.svg"
const siteDescription = "Gatsby JS with Strapi Headless CMS"
const siteImage = "/svg/opensource.svg"
const siteTwitter = "@auto_machineV2"
const siteKeywords = "goldlabel, gatsby, strapi, pwa, listingslab, react, javascript"
const sitePrimaryColor = "#32328C" 
const siteSecondaryColor = "#C09F52"

const config: GatsbyConfig = {
  siteMetadata: {
    siteIcon,
    siteTitle,
    siteDescription,
    siteImage,
    siteKeywords,
    siteTwitter,
    sitePrimaryColor,
    siteSecondaryColor,
  },
  plugins: [
    { 
      resolve: `gatsby-source-strapi`, 
      options: strapiConfig
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteTitle,
        short_name: siteTitle,
        icon: `./static${siteIcon}`,
        start_url: `/`,
        background_color: sitePrimaryColor,
        theme_color: sitePrimaryColor,
        display: `standalone`,
      }
    },
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        title: siteTitle,
        description: siteDescription,
      },
    },
    {
      resolve: 'gatsby-plugin-offline'
    }
  ],
  jsxRuntime: `automatic`,
}

export default config
