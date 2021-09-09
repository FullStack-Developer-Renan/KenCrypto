import { AxiosInstance } from "axios";
export declare class MicroAPI {
    baseURL: string;
    axiosInstance: AxiosInstance;
    constructor(apiToken: string);
    cryptoCurrency(symbol: string[]): Promise<any>;
    priceConversion(amount: number, symbol: string, convert: string[]): Promise<any>;
}
