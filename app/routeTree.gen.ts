/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as PokemonIdImport } from './routes/pokemon.$id'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PokemonIdRoute = PokemonIdImport.update({
  id: '/pokemon/$id',
  path: '/pokemon/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/pokemon/$id': {
      id: '/pokemon/$id'
      path: '/pokemon/$id'
      fullPath: '/pokemon/$id'
      preLoaderRoute: typeof PokemonIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/pokemon/$id': typeof PokemonIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/pokemon/$id': typeof PokemonIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/pokemon/$id': typeof PokemonIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/pokemon/$id'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/pokemon/$id'
  id: '__root__' | '/' | '/pokemon/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  PokemonIdRoute: typeof PokemonIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PokemonIdRoute: PokemonIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/pokemon/$id"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/pokemon/$id": {
      "filePath": "pokemon.$id.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
