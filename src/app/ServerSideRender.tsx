import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import {SsrShape} from "../types"

export default function ServerSideRender(props: SsrShape) {
  const {
    // locale,
    title,
    description,
    canoical,
    url,
    og,
    twitter
  } = props
  return (<>
            <GatsbySeo 
              title={title}
              description={description}
              canonical={canoical}
              twitter={{
                handle: twitter,
                site: twitter,
                cardType: 'summary_large_image',
              }}
              openGraph={{
                type: 'website',
                url,
                title,
                description,
                images: [
                  {
                    url: og,
                  },
                ],
              }}/>

            
          </>)
}

export function Head() {
  const locale = "en"
  return (
    <>
      <html lang={locale} />
    </>
  )
}

/*
  <pre>{JSON.stringify(apps, null, 2)}</pre> 
*/
