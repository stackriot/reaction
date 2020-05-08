/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type routes_ViewingRoomWorksRouteQueryVariables = {
    slug: string;
};
export type routes_ViewingRoomWorksRouteQueryResponse = {
    readonly viewingRoom: {
        readonly " $fragmentRefs": FragmentRefs<"ViewingRoomWorksRoute_viewingRoom">;
    } | null;
};
export type routes_ViewingRoomWorksRouteQuery = {
    readonly response: routes_ViewingRoomWorksRouteQueryResponse;
    readonly variables: routes_ViewingRoomWorksRouteQueryVariables;
};



/*
query routes_ViewingRoomWorksRouteQuery(
  $slug: ID!
) {
  viewingRoom(id: $slug) {
    ...ViewingRoomWorksRoute_viewingRoom
  }
}

fragment ViewingRoomArtworkDetails_artwork on Artwork {
  id
  artistNames
  title
  date
  description
  href
}

fragment ViewingRoomCarousel_artwork on Artwork {
  images {
    internalID
    imageHref: url(version: ["large"])
  }
}

fragment ViewingRoomWorksRoute_viewingRoom on ViewingRoom {
  artworksConnection {
    edges {
      node {
        internalID
        ...ViewingRoomCarousel_artwork
        ...ViewingRoomArtworkDetails_artwork
        id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "slug",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "slug"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "internalID",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "routes_ViewingRoomWorksRouteQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewingRoom",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ViewingRoom",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ViewingRoomWorksRoute_viewingRoom",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "routes_ViewingRoomWorksRouteQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewingRoom",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ViewingRoom",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "artworksConnection",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtworkConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "ArtworkEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Artwork",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "images",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Image",
                        "plural": true,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": "imageHref",
                            "name": "url",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "version",
                                "value": [
                                  "large"
                                ]
                              }
                            ],
                            "storageKey": "url(version:[\"large\"])"
                          }
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "id",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "artistNames",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "title",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "date",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "description",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "href",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "routes_ViewingRoomWorksRouteQuery",
    "id": null,
    "text": "query routes_ViewingRoomWorksRouteQuery(\n  $slug: ID!\n) {\n  viewingRoom(id: $slug) {\n    ...ViewingRoomWorksRoute_viewingRoom\n  }\n}\n\nfragment ViewingRoomArtworkDetails_artwork on Artwork {\n  id\n  artistNames\n  title\n  date\n  description\n  href\n}\n\nfragment ViewingRoomCarousel_artwork on Artwork {\n  images {\n    internalID\n    imageHref: url(version: [\"large\"])\n  }\n}\n\nfragment ViewingRoomWorksRoute_viewingRoom on ViewingRoom {\n  artworksConnection {\n    edges {\n      node {\n        internalID\n        ...ViewingRoomCarousel_artwork\n        ...ViewingRoomArtworkDetails_artwork\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'd481cd8401e3968a7f2ef4c823b2a1c4';
export default node;
