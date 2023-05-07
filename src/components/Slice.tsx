import React from "react"
import {
  usePwaSelect,
  selectPWA,
} from "../"

export default function Slice() {
  const debug = false
  const pwa = usePwaSelect(selectPWA)
  let locale: string|null = null
  if (pwa) locale = pwa.locale
  return (
    <>
      { debug ? <pre>redux: {JSON.stringify(pwa, null, 2)}</pre> : null }
    </>
  )
}