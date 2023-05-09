import { useStaticQuery, graphql } from "gatsby"

export const useGQLApps = () => {
  const gql = useStaticQuery(
    graphql`
    query Apps {
        allStrapiApp {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `
  )
  return gql.allStrapiApp.edges
}
  