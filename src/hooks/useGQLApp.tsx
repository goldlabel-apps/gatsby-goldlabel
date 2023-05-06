import { useStaticQuery, graphql } from "gatsby"
export const useGQLApp = () => {
  const gql = useStaticQuery(
    graphql`
    query App {
      allStrapiApp {
        edges {
          node {
            id
            locale
            Title
            Description
            Meta {
              id
              locale
              Title
              SiteTitle
              Description
              Keywords
              URL
              Canonical
              Twitter
              OGImage {
                alternativeText
                height
                width
                url
                formats {
                  large {
                    height
                    width
                    url
                  }
                  medium {
                    height
                    url
                    width
                  }
                  small {
                    width
                    url
                    height
                  }
                  thumbnail {
                    height
                    url
                    width
                  }
                }
              }
            }
            AppIcon {
              id
              alternativeText
              url
              width
              height
              formats {
                thumbnail {
                  height
                  url
                  width
                }
              }
            }
            Hero {
              id
              locale
              Title
              Heading
              Subheader
              CTALabel
              ClickURL
            }
            Languages {
              id
              Title
              EnglishName
              LocalName
              LocaleCode
            }
            Location {
              id
              locale
              Title
              Country
              City
              Lng
              Lat
              Zoom
            }
            Theme {
              id
              locale
              Title
              Primary
              Secondary
              Font
              LightBackground
              DefaultDark
            }
            Books {
              id
              locale
              Title
              Description
              Image {
                id
                url
                height
                width
                alternativeText
                formats {
                  large {
                    width
                    url
                    height
                  }
                  medium {
                    height
                    url
                    width
                  }
                  thumbnail {
                    url
                    width
                    height
                  }
                  small {
                    height
                    url
                    width
                  }
                }
              }
              Documents {
                id
                locale
                Title
                Description
                Keywords
                Slug
                Body {
                  data
                }
              }
              Slug
            }
            Video {
              id
              locale
              Title
              Description
              Platform
              URL
            }
          }
        }
      }
    }
    `
  )
  return gql.allStrapiApp.edges
}
