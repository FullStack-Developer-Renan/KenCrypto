import axios, { AxiosInstance } from "axios";
require("dotenv").config();

export class MicroAPI {
  baseURL: string = "https://pro-api.coinmarketcap.com/v1/";
  axiosInstance: AxiosInstance;

  constructor() {
    const API_TOKEN = "a163bb45-fbd2-44fc-9894-b1f588e49a34";

    let apiToken = API_TOKEN;
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
    });

    this.axiosInstance.defaults.headers.common[
      "X-CMC_PRO_API_KEY"
    ] = `${apiToken}`;
  }

  async cryptoCurrencyNoQP() {
    const url = `cryptocurrency/listings/latest`;

    try {
      const response = await this.axiosInstance.get(url);

      let handle_resp = response.data;
      let coin = handle_resp[Object.keys(handle_resp)[1]];

      for (let i = 0; i < Object.keys(coin).length; i++) {
        delete coin[i]["tags"];
        delete coin[i]["num_market_pairs"];
        delete coin[i]["max_supply"];
        delete coin[i]["circulating_supply"];
        delete coin[i]["total_supply"];
        delete coin[i]["is_active"];
        delete coin[i]["platform"];
        delete coin[i]["cmc_rank"];
        delete coin[i]["is_fiat"];
        delete coin[i]["quote"]["USD"]["volume_24h"];
        delete coin[i]["quote"]["USD"]["volume_change_24h"];
        delete coin[i]["quote"]["USD"]["percent_change_1h"];
        delete coin[i]["quote"]["USD"]["percent_change_24h"];
        delete coin[i]["quote"]["USD"]["percent_change_7d"];
        delete coin[i]["quote"]["USD"]["percent_change_30d"];
        delete coin[i]["quote"]["USD"]["percent_change_60d"];
        delete coin[i]["quote"]["USD"]["percent_change_60d"];
        delete coin[i]["quote"]["USD"]["percent_change_90d"];
        delete coin[i]["quote"]["USD"]["market_cap"];
        delete coin[i]["quote"]["USD"]["market_cap_dominance"];
        delete coin[i]["quote"]["USD"]["fully_diluted_market_cap"];
      }

      return coin;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      } else {
        throw "Unknow Exception";
      }
    }
  }

  async cryptoCurrencyQP(symbol: string) {
    const url: string = `cryptocurrency/quotes/latest?symbol=${symbol}`;

    try {
      const response = await this.axiosInstance.get(url);

      let handle_resp = response.data;
      let coin = handle_resp[Object.keys(handle_resp)[1]];

      for (let i = 0; i < Object.keys(coin).length; i++) {
        delete coin[Object.keys(coin)[i]]["tags"];
        delete coin[Object.keys(coin)[i]]["num_market_pairs"];
        delete coin[Object.keys(coin)[i]]["max_supply"];
        delete coin[Object.keys(coin)[i]]["circulating_supply"];
        delete coin[Object.keys(coin)[i]]["total_supply"];
        delete coin[Object.keys(coin)[i]]["is_active"];
        delete coin[Object.keys(coin)[i]]["platform"];
        delete coin[Object.keys(coin)[i]]["cmc_rank"];
        delete coin[Object.keys(coin)[i]]["is_fiat"];
        delete coin[Object.keys(coin)[i]]["quote"]["USD"]["volume_24h"];
        delete coin[Object.keys(coin)[i]]["quote"]["USD"]["volume_change_24h"];
        delete coin[Object.keys(coin)[i]]["quote"]["USD"]["percent_change_1h"];
        delete coin[Object.keys(coin)[i]]["quote"]["USD"]["percent_change_24h"];
        delete coin[Object.keys(coin)[i]]["quote"]["USD"]["percent_change_7d"];
        delete coin[Object.keys(coin)[i]]["quote"]["USD"]["percent_change_30d"];
        delete coin[Object.keys(coin)[i]]["quote"]["USD"]["percent_change_60d"];
        delete coin[Object.keys(coin)[i]]["quote"]["USD"]["percent_change_60d"];
        delete coin[Object.keys(coin)[i]]["quote"]["USD"]["percent_change_90d"];
        delete coin[Object.keys(coin)[i]]["quote"]["USD"]["market_cap"];
        delete coin[Object.keys(coin)[i]]["quote"]["USD"][
          "market_cap_dominance"
        ];
        delete coin[Object.keys(coin)[i]]["quote"]["USD"][
          "fully_diluted_market_cap"
        ];
      }

      return coin;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      } else {
        throw "Unknow Exception";
      }
    }
  }

  async cryptoList(symbol: string) {
    const url = `cryptocurrency/listings/latest?symbol=${symbol}`;

    try {
      const response = await this.axiosInstance.get(url);

      let handle_resp = response.data;
      let coin = handle_resp[Object.keys(handle_resp)[1]];

      for (let i = 0; i < Object.keys(coin).length; i++) {
        delete coin[i]["tags"];
        delete coin[i]["num_market_pairs"];
        delete coin[i]["max_supply"];
        delete coin[i]["circulating_supply"];
        delete coin[i]["total_supply"];
        delete coin[i]["is_active"];
        delete coin[i]["platform"];
        delete coin[i]["cmc_rank"];
        delete coin[i]["is_fiat"];
        delete coin[i]["quote"]["USD"]["volume_24h"];
        delete coin[i]["quote"]["USD"]["volume_change_24h"];
        delete coin[i]["quote"]["USD"]["percent_change_1h"];
        delete coin[i]["quote"]["USD"]["percent_change_24h"];
        delete coin[i]["quote"]["USD"]["percent_change_7d"];
        delete coin[i]["quote"]["USD"]["percent_change_30d"];
        delete coin[i]["quote"]["USD"]["percent_change_60d"];
        delete coin[i]["quote"]["USD"]["percent_change_60d"];
        delete coin[i]["quote"]["USD"]["percent_change_90d"];
        delete coin[i]["quote"]["USD"]["market_cap"];
        delete coin[i]["quote"]["USD"]["market_cap_dominance"];
        delete coin[i]["quote"]["USD"]["fully_diluted_market_cap"];
      }

      return coin;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      } else {
        throw "Unknow Exception";
      }
    }
  }

  async priceConversion(amount: number, symbol: string, convert: string[]) {
    let url: string = `tools/price-conversion?amount=${amount}&symbol=${symbol}&convert=${convert}`;

    try {
      const response = await this.axiosInstance.get(url);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      } else {
        throw "Unknow Exception";
      }
    }
  }
}
