import { useStaticQuery, graphql } from "gatsby"
export const useGQLGatsbyPages = () => {
  const gql = useStaticQuery(
    graphql`
    query GatsbyPages {
    allSitePage {
        edges {
            node {
                pageContext
                path
            }
        }
    }
    }
    `
  )
  return gql.allSitePage
}
