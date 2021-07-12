import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const mejorconsalud = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.beta.mejorconsalud.com/wp-json/mc'}),
  endpoints(build) {
    return {
      basicSearch: build.query({
        query: (input) => `v2/posts?search=${input}`
      }),
      searchWithRel: build.query({
        query: (input) => `v2/posts?search=${input}&page=1&orderby=relevance`
      }),
      searchById: build.query({
        query: (id) => `v1/posts/${id}`
      }),
     }
  }
})

export const { useBasicSearchQuery, useSearchWithRelQuery, useSearchByIdQuery } = mejorconsalud