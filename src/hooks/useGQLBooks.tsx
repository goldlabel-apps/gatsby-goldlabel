import { useStaticQuery, graphql } from "gatsby"

export const useGQLBooks = () => {
  const gql = useStaticQuery(
    graphql`
    query Books {
      allStrapiBook(filter: {locale: {eq: "en"}}) {
        edges {
          node {
            Title
            Description
            Slug
            id
            localizations {
              data {
                attributes {
                  locale
                  Description
                  Slug
                  Title
                }
              }
            }
            Documents {
              locale
              Title
              Description
              Slug
              id
              Body {
                data
              }
            }
            Image {
              alternativeText
              width
              height
              url
            }
          }
        }
      }
    }
    `
  )
  return gql.allStrapiBook.edges
}
