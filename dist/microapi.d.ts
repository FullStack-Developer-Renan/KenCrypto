import { AxiosInstance } from "axios";
export declare class MicroAPI {
    baseURL: string;
    axiosInstance: AxiosInstance;
    constructor();
    cryptoCurrency(symbol: string[]): Promise<any>;
    priceConversion(amount: number, symbol: string, convert: string[]): Promise<any>;
}
