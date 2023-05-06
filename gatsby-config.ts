import type { GatsbyConfig } from 'gatsby'
// import strapiConfig from "./strapi"

const siteTitle = "Gatsby Template"
const siteDescription = "Open Source Gatsby starter for Listingslab Goldlabel"
const siteKeywords = "goldlabel, gatsby, strapi, pwa, listingslab, react, javascript"
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
    {
      resolve: 'gatsby-plugin-offline',
   }],
  jsxRuntime: `automatic`,
}

export default config
