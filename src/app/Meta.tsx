import {
  GatsbyShape,
  MetaShape,
} from "../types"

// import {
//   makeImgSrc,
// } from "../"

export function makeMeta (
  gatsby: GatsbyShape,
) {

  // console.log("gatsby", gatsby)
  
  let siteTitle = gatsby.siteTitle
  let siteDescription = gatsby.siteDescription
  let canonical = gatsby.siteUrl
  let title = siteTitle
  let description = siteDescription
  let url = canonical
  let twitter = gatsby.siteTwitter
  let keywords = gatsby.siteKeywords
  let image = gatsby.siteImage

  const meta: MetaShape = {
      title,
      siteTitle,
      description,
      siteDescription,
      keywords,
      url,
      canonical,
      image,
      twitter,
  }
  return meta
}
