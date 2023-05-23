import {GatsbyShape} from "./src/types"
import strapiConfig from "./strapi"
import type {GatsbyConfig} from "gatsby"

const siteTitle = "Goldlabel"
const siteDescription = "by listingslab"
const siteUrl = "https://listingslab.com/"
const siteIcon = "/svg/icons/goldlabel.svg"
const siteImage = "/webp/golden-ticket.webp"
const siteTwitter = "@listingslab"
const siteTheme = "#C09F52"
const siteKeywords = "goldlabel, open source, gatsby, strapi, pwa, listingslab, react, javascript"

const siteMetadata: GatsbyShape =  {
  siteTitle,
  siteUrl,
  siteDescription,
  siteIcon,
  siteImage,
  siteKeywords,
  siteTwitter,
  siteTheme,
}

const config: GatsbyConfig = {
  siteMetadata,
  plugins: [
    { 
      resolve: `gatsby-source-strapi`, 
      options: strapiConfig
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        start_url: `/`,
        display: `standalone`,
        name: siteTitle,
        short_name: siteTitle,
        icon: `./static${siteIcon}`,
        background_color: siteTheme,
        theme_color: siteTheme,
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
