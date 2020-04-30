import { findCurrentRoute } from "../findCurrentRoute"
import { Match, Router, Location } from "found"

describe("findCurrentRoute", () => {
  const getMatch = (config: Partial<Match>): Match => ({
    routes: [],
    router: ({} as unknown) as Router,
    context: {},
    routeIndices: [0],
    location: ({} as unknown) as Location,
    params: {},
    ...config,
  })

  it("should return a base nested route", () => {
    const match = getMatch({
      routeIndices: [0, 0],
      routes: [
        {
          path: "/artist/:artistID",
          children: [
            {
              path: "/",
            },
          ],
        },
      ],
    })
    expect(findCurrentRoute(match)).toHaveProperty("path", "/")
  })

  it("should return a non-zero nested route", () => {
    const match = getMatch({
      routeIndices: [0, 2],
      routes: [
        {
          path: "/artist/:artistID",
          children: [
            {
              path: "/",
            },
            {
              path: "/works-for-sale",
            },
            {
              path: "/cv",
            },
          ],
        },
      ],
    })
    expect(findCurrentRoute(match)).toHaveProperty("path", "/cv")
  })
})
