/*
 * This route sets necessary <head> meta tags, which is necessary for the Studio to work well with
 * devices with display cutouts such as iPhone (the "notch", dynamic island, etc.)
 */

import {NextStudioHead} from 'next-sanity/studio/head'

export default function Head() {
  return <NextStudioHead favicons={false} />
}
