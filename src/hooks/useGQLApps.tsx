import { useStaticQuery, graphql } from "gatsby"

export const useGQLApps = () => {
  const gql = useStaticQuery(
    graphql`
    query Apps {
        allStrapiApp {
          edges {
            node {
              id
              Title
            }
          }
        }
      }
    `
  )
  return gql.allStrapiApp.edges
}
  