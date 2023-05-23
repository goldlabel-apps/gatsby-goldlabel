import { PaletteMode } from "@mui/material"



export type SsrShape = {
  title: string
  description: string
  canoical: string
  url: string
  og: string
  twitter: string
  locale: string
}


export type MetaShape = {
  siteTitle: string
  title: string
  description: string
  siteDescription: string
  keywords: string
  url: string
  canonical: string
  image: string
  twitter: string
}

export type LocaleShape = {
  code: string
  displayName: string
  localName: string
  flag: string
}

export type PwaReduxShape = {
  started: boolean
  locale: string
  locales: Array<LocaleShape>
  persisted?: boolean
  theme: ThemeShape
  sitemap: boolean
}

export type GatsbyShape = {
  siteUrl: string
  siteIcon: string
  siteTitle: string
  siteDescription: string
  siteKeywords: string
  siteImage: string
  siteTwitter: string
  siteTheme: string
}

export type ThemeShape = {
  title: string
  description?: string
  primaryColor: string
  secondaryColor: string
  font: string
  mode: PaletteMode
}

export type HeroData = {
  hero: HeroShape
}
export type HeroShape = {
  Title: string
  CTALabel: string
  ClickURL: string
  Subheader: string
  HeroImage: any
}

export type BookData = {
  book: BookShape
}
export type BookShape = {
  Title: string
  Description: string
  Image: any
  
}
export type BooksShape = {
  books: Array<BookShape>
}

export type ImageSizeShape = {
  width: number
  height: number
}

export interface KeyValueShape {
  key: string
  value: any
}

export type PWABarShape = {
  data?: any
}

export type WrapperShape = {
  command?: string
  data?: any
  pageContext?: any
  location: any
}



export type DocumentShape = {
  document?: any
}