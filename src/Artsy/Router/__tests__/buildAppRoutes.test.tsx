import {
  Mediator,
  SystemContextProvider,
  useSystemContext,
} from "Artsy/SystemContext"
import { mount } from "enzyme"
import React from "react"
import { buildAppRoutes } from "../buildAppRoutes"
import { buildClientApp } from "../buildClientApp"

jest.mock("Artsy/Router/Boot", () => ({
  Boot: ({ children }) => children,
}))

jest.mock("Artsy/Analytics/useTracking", () => ({
  useTracking: () => ({
    trackEvent: x => x,
  }),
}))

describe("buildAppRoutes", () => {
  const mediator: Mediator = {
    trigger: jest.fn(),
    on: jest.fn(),
    off: jest.fn(),
  }

  it("creates a master route list", () => {
    const routes = buildAppRoutes([
      {
        routes: [
          {
            path: "/foo",
          },
        ],
      },
      {
        routes: [
          {
            path: "/bar",
          },
        ],
      },
    ])

    expect(routes[0].Component.displayName).toEqual("withRouter(Component)")

    expect(routes[0].children).toEqual([
      {
        path: "/foo",
        fetchIndicator: "overlay",
      },
      {
        path: "/bar",
        fetchIndicator: "overlay",
      },
    ])
  })

  it("filters out disabled routes", () => {
    const routes = buildAppRoutes([
      {
        routes: [
          {
            path: "/foo",
          },
        ],
      },
      {
        routes: [
          {
            path: "/bar",
          },
        ],
        disabled: true,
      },
    ])

    expect(routes[0].children).toEqual([
      {
        path: "/foo",
        fetchIndicator: "overlay",
      },
    ])
  })

  it("sets a router in the global context on mount", async done => {
    const App = () => {
      const { router } = useSystemContext()
      expect(router).toBeDefined()
      done()
      return null
    }

    const { ClientApp } = await buildClientApp({
      history: {
        protocol: "memory",
      },
      initialRoute: "/foo",
      routes: buildAppRoutes([
        {
          routes: [
            {
              path: "/foo",
              Component: App,
            },
          ],
        },
      ]),
    })

    mount(
      <SystemContextProvider mediator={mediator}>
        <ClientApp />
      </SystemContextProvider>
    )
  })

  it("uses an `<AppShell>` component to render child routes", async () => {
    const { ClientApp } = await buildClientApp({
      history: {
        protocol: "memory",
      },
      initialRoute: "/foo",
      routes: buildAppRoutes([
        {
          routes: [
            {
              path: "/foo",
              Component: () => <div />,
            },
          ],
        },
      ]),
    })

    const wrapper = mount(
      <SystemContextProvider mediator={mediator}>
        <ClientApp />
      </SystemContextProvider>
    )
    expect(wrapper.find("AppShell").length).toEqual(1)
  })
})
