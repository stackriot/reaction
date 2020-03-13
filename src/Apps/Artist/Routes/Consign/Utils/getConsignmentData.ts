/**
 * Passed https://docs.google.com/spreadsheets/d/1EicHOCyCozsPBkVOkQGTTUtEds7qQuacUAgLy-C2-Nk/edit#gid=0
 * through a CSVtoJSON converter
 */

import { flatten, groupBy } from "lodash"
import { staticCSVToJSONData } from "./staticCSVToJSONData"

export interface ArtistConsignment {
  artworks: object[]
  metadata: {
    highestRealized: string
    realized: string
    recentlySoldArtworkIDs: string[]
    roundedUniqueVisitors: string
    roundedViews: string
    str: string
    uniqueVisitors: string
    views: string
  }
}

/**
 * Massage data to be more usable
 */
export function getConsignmentData(pathname: string): ArtistConsignment {
  const dataGroupedByURL = groupBy(staticCSVToJSONData, "url")

  const mappedData = Object.entries(dataGroupedByURL).reduce(
    (acc, [key, value]) => {
      /**
       * The first item in the array contains metrics related to artist; the rest
       * are artworks to display
       */
      const [meta, ...artworks] = value

      const recentlySoldArtworkIDs = flatten(
        artworks.map(artwork => {
          const ids = artwork[
            "Artwork ids (recently sold) (comma separated)"
          ].split(",")
          return ids
        })
      )

      // Mapped CSV columns
      const {
        "views to content from that artist (last month)": views,
        "ROUNDED views to content from that artist (last month)": roundedViews,
        "unique visitors to content from artist (last month)": uniqueVisitors,
        "ROUNDED unique visitors to content from artist (last month)": roundedUniqueVisitors,
        "STR (last 12 months)": str,
        "Realized / estimate": realized,
        "Highest realized price": highestRealized,
      } = meta

      return {
        ...acc,
        [key]: {
          artworks,
          metadata: {
            views,
            roundedViews,
            uniqueVisitors,
            roundedUniqueVisitors,
            str,
            realized,
            highestRealized,
            recentlySoldArtworkIDs,
          },
        },
      }
    },
    {}
  )

  const consignmentData = mappedData[pathname]
  return consignmentData
}
