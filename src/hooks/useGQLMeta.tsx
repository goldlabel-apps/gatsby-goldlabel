import { useStaticQuery, graphql } from "gatsby"
export const useGQLMeta = () => {
  const gql = useStaticQuery(
    graphql`
    query Meta {
      site {
        siteMetadata {
          siteTitle
          siteDescription
          siteUrl
          siteImage
          siteKeywords
          siteTwitter
          siteIcon
        }
      }
    }
    `
  )
  return gql.site.siteMetadata
}
