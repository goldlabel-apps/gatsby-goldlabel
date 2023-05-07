import { useStaticQuery, graphql } from "gatsby"
export const useGQLMeta = () => {
  const gql = useStaticQuery(
    graphql`
    query Meta {
      site {
        siteMetadata {
          siteTitle
          siteDescription
          siteIcon
          siteImage
          siteTwitter
          siteKeywords
        }
      }
    }
    `
  )
  return gql.site.siteMetadata
}
