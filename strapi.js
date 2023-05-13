require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: "app",
      pluginOptions: {
        i18n: {
          locale: "all",
        },
      },
    },
    {
      singularName: "book",
      pluginOptions: {
        i18n: {
          locale: "all",
        },
      },
    },
    {
      singularName: "docs",
      pluginOptions: {
        i18n: {
          locale: "all",
        },
      },
    },
    
  ],
  remoteFileHeaders: {
    Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
  },
}
