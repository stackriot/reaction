import { Box, Flex, Sans, Serif, Spacer } from "@artsy/palette"
import React from "react"

import { routes_ArtistConsignQueryResponse } from "__generated__/routes_ArtistConsignQuery.graphql"

import FillwidthItem from "Components/Artwork/FillwidthItem"
import { ArtistConsignment } from "../Utils/getConsignmentData"
import { SectionContainer } from "./SectionContainer"

interface ArtistConsignRecentlySoldProps {
  artistConsignment: ArtistConsignment
  artworksByInternalID: routes_ArtistConsignQueryResponse["artworksByInternalID"]
}

export const ArtistConsignRecentlySold: React.FC<ArtistConsignRecentlySoldProps> = props => {
  return (
    <SectionContainer>
      <Box textAlign="center">
        <Box>
          <Box>
            <Serif size="10">Recently sold on Artsy</Serif>
          </Box>

          <Spacer my={1} />

          <Box>
            <Sans size="6">
              Works by Kehinde Wiley sold on Artsy in the past 12 months
            </Sans>
          </Box>

          <Spacer my={4} />

          <Flex
            justifyContent="space-between"
            flexWrap="wrap"
            alignItems="center"
          >
            {props.artworksByInternalID.map(artwork => {
              return (
                <Box px={2}>
                  <FillwidthItem
                    artwork={artwork}
                    targetHeight={150}
                    imageHeight={150}
                    width={150 * artwork.image.aspectRatio}
                  />
                </Box>
              )
            })}
          </Flex>
        </Box>
      </Box>
    </SectionContainer>
  )
}
