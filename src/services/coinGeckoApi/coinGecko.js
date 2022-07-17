const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
var coinGeckoApi = async() => {
    let data = await CoinGeckoClient.ping();
    console.log(data);
};

export const {
    useCoinGeckoQuery,
} = coinGeckoApi;