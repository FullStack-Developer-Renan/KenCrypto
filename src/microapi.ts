import axios, { AxiosInstance } from "axios";
require("dotenv").config();

export class MicroAPI {
  baseURL: string = "https://pro-api.coinmarketcap.com/v1/";
  axiosInstance: AxiosInstance;

  constructor() {
    const API_TOKEN = process.env.API_TOKEN;

    let apiToken = API_TOKEN;
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
    });

    this.axiosInstance.defaults.headers.common[
      "X-CMC_PRO_API_KEY"
    ] = `${apiToken}`;
  }

  async cryptoCurrency(symbol: string[]) {
    const url: string = `cryptocurrency/quotes/latest?symbol=${symbol}`;

    try {
      const response = await this.axiosInstance.get(url);

      let handle_resp = response.data;
      let coin = handle_resp[Object.keys(handle_resp)[1]];

      for (let i = 0; i < Object.keys(coin).length; i++) {
        delete coin[Object.keys(coin)[0]]["tags"];
        delete coin[Object.keys(coin)[0]]["num_market_pairs"];
        delete coin[Object.keys(coin)[0]]["max_supply"];
        delete coin[Object.keys(coin)[0]]["circulating_supply"];
        delete coin[Object.keys(coin)[0]]["total_supply"];
        delete coin[Object.keys(coin)[0]]["is_active"];
        delete coin[Object.keys(coin)[0]]["platform"];
        delete coin[Object.keys(coin)[0]]["cmc_rank"];
        delete coin[Object.keys(coin)[0]]["is_fiat"];
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
