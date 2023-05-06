import React from "react"
import {
  SeoShape,
  ImageSizeShape,
} from "../types"
import {makeImgSrc} from "../"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { useGQLMeta } from "../hooks/useGQLMeta"

export default function SEO(props: any) {
  const {data, book} = props
  const globalMeta = useGQLMeta()
  // console.log("data", data)
  const {
    SiteTitle,
    Description,
    // URL,
    OGImage,
  } = data

  let siteTitle: string = SiteTitle
  if (!siteTitle) siteTitle = globalMeta.siteTitle
  
  let description: string = Description
  if (!description) description = globalMeta.siteTitle
  
  let title: string = `${siteTitle} ${description}`
  let keywords: string = globalMeta.siteKeywords
  let url: string = globalMeta.siteUrl
  let canonical: string = globalMeta.siteUrl
  let twitter = globalMeta.siteTwitter

  let openGraphImageSrc: string = globalMeta.siteImage
  let openGraphImageAlt: string = `${siteTitle} ${description}`
  let openGraphImageSrcSize: ImageSizeShape = {
    width: 1200,
    height: 636,
  }
  if (OGImage){
      openGraphImageSrc = makeImgSrc(OGImage.url)
      openGraphImageAlt = OGImage.alternativeText
      openGraphImageSrcSize = {
        width: OGImage.width,
        height: OGImage.height,
      }
  }
  if (book){
    title = `${book.data.Title}`
    keywords = `${book.data.Keywords}, ${keywords}`
  }

  let seo: SeoShape = {
    siteTitle,
    title,
    description,
    keywords,
    url,
    canonical,
    openGraphImageSrc,
    openGraphImageSrcSize,
    openGraphImageAlt,
    twitter,
  }

  return (
    <>
      <GatsbySeo 
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        metaTags={[
          {
            property: 'keywords',
            content: seo.keywords
          },
          {
            name: 'application-name',
            content: seo.siteTitle
          },
        ]}
        openGraph={{
          type: 'website',
          url: seo.url,
          title: seo.title,
          description: seo.description,
          images: [
            {
              url: seo.openGraphImageSrc,
              width: seo.openGraphImageSrcSize.width,
              height: seo.openGraphImageSrcSize.height,
              alt: seo.openGraphImageAlt,
            },
          ],
        }}
        twitter={{
          handle: twitter,
          site: twitter,
          cardType: 'summary_large_image',
        }}
      />
    </>
  );
}
