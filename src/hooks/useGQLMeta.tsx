import { useStaticQuery, graphql } from "gatsby"
export const useGQLMeta = () => {
  const gql = useStaticQuery(
    graphql`
    query Meta {
      site {
        siteMetadata {
          siteDescription
          siteIcon
          siteImage
          siteKeywords
          siteTitle
          siteTwitter
          siteUrl
        }
      }
    }
    `
  )
  return gql.site.siteMetadata
}
