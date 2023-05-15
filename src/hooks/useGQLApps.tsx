import { useStaticQuery, graphql } from "gatsby"

export const useGQLApps = () => {
  const gql = useStaticQuery(
    graphql`
query AppGQL {
    allStrapiApp(filter: {slug: {eq: "listingslab"}}) {
      edges {
        node {
          locale
          title
          description
          canonical
          keywords
          appicon {
            alternativeText
            width
            height
            url
          }
          appimage {
            alternativeText
            width
            height
            url
          }
          books {
            title
            description
            keywords
            slug,
            bookimage {
              alternativeText
              width
              height
              url
            }
            docs {
              title
              description
              keywords
              slug
              body {
                data
              }
            }
          }
        }
      }
    }
  }
    `
  )
  return gql.allStrapiApp.edges
}
  