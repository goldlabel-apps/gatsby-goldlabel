import type { GatsbyConfig } from 'gatsby'
import strapiConfig from "./strapi"

const siteTitle = "Listingslab"
const siteDescription = "Software Development"
const siteKeywords = "goldlabel, gatsby, strapi, pwa, listingslab, react, javascript, ai, artificial intelligence, chatgpt"
const siteUrl = "https://listingslab.com/"
const siteImage = "https://listingslab.com/svg/opengraphImage.svg"
const siteTwitter = "@auto_machineV2"
const siteIcon = "/svg/icons/goldenticket.svg"

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle,
    siteDescription,
    siteUrl,
    siteImage,
    siteKeywords,
    siteTwitter,
    siteIcon,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: `./static${siteIcon}`,
        name: siteTitle,
        short_name: siteTitle,
        start_url: `/`,
        background_color: `#C09F52`,
        theme_color: `#C09F52`,
        display: `standalone`,
      }
    },
    { 
      resolve: `gatsby-source-strapi`, 
      options: strapiConfig
    },
    "gatsby-plugin-next-seo",
    {
      resolve: 'gatsby-plugin-offline',
      options: {
      }
   }],
  jsxRuntime: `automatic`,
}

export default config
