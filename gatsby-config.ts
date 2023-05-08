import {GatsbyShape} from "./src/types"
import strapiConfig from "./strapi"
import type {GatsbyConfig} from "gatsby"

const siteTitle = "Goldlabel Open Source"
const siteUrl = "https://gatsby-template.onrender.com/"
const siteIcon = "/svg/icons/goldenticket.svg"
const siteDescription = "Gatsby JS with Strapi Headless CMS"
const siteImage = "/svg/opensource.svg"
const siteTwitter = "@auto_machineV2"
const siteKeywords = "goldlabel, gatsby, strapi, pwa, listingslab, react, javascript"
const siteTheme = "#32328C"

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
        name: siteTitle,
        short_name: siteTitle,
        icon: `./static${siteIcon}`,
        start_url: `/`,
        background_color: siteTheme,
        theme_color: siteTheme,
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
