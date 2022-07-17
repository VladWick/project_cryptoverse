import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.coingecko.com/api/v3/';

const cryptoExchangesApiHeaders = {
    'X-RapidAPI-Key': 'a7a40bb238msh8fbf93337e72e18p101ce8jsn9e0b9982565a',
    'X-RapidAPI-Host': 'coinlore-cryptocurrency.p.rapidapi.com'
};
const createRequest = (url) => ({ url });

export const cryptoExchangesApi = createApi({
  reducerPath: 'cryptoExchangesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  }),
});

export const {
  useGetExchangesQuery,
} = cryptoExchangesApi;
