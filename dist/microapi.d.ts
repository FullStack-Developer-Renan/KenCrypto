import { AxiosInstance } from "axios";
export declare class MicroAPI {
    baseURL: string;
    axiosInstance: AxiosInstance;
    constructor();
    cryptoCurrencyNoQP(): Promise<any>;
    cryptoCurrencyQP(symbol: string): Promise<any>;
    cryptoList(symbol: string): Promise<any>;
    priceConversion(amount: number, symbol: string, convert: string[]): Promise<any>;
}
