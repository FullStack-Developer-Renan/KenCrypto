"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicroAPI = void 0;
var axios_1 = __importDefault(require("axios"));
require("dotenv").config();
var MicroAPI = /** @class */ (function () {
    function MicroAPI() {
        this.baseURL = "https://pro-api.coinmarketcap.com/v1/";
        var API_TOKEN = "a163bb45-fbd2-44fc-9894-b1f588e49a34";
        var apiToken = API_TOKEN;
        this.axiosInstance = axios_1.default.create({
            baseURL: this.baseURL,
        });
        this.axiosInstance.defaults.headers.common["X-CMC_PRO_API_KEY"] = "" + apiToken;
    }
    MicroAPI.prototype.cryptoCurrencyNoQP = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var url, response, handle_resp, coin, i, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        url = "cryptocurrency/listings/latest";
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.axiosInstance.get(url)];
                    case 2:
                        response = _b.sent();
                        handle_resp = response.data;
                        coin = handle_resp[Object.keys(handle_resp)[1]];
                        for (i = 0; i < Object.keys(coin).length; i++) {
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
                        return [2 /*return*/, coin];
                    case 3:
                        error_1 = _b.sent();
                        if (axios_1.default.isAxiosError(error_1)) {
                            return [2 /*return*/, (_a = error_1.response) === null || _a === void 0 ? void 0 : _a.data];
                        }
                        else {
                            throw "Unknow Exception";
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MicroAPI.prototype.cryptoCurrencyQP = function (symbol) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var url, response, handle_resp, coin, i, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        url = "cryptocurrency/quotes/latest?symbol=" + symbol;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.axiosInstance.get(url)];
                    case 2:
                        response = _b.sent();
                        handle_resp = response.data;
                        coin = handle_resp[Object.keys(handle_resp)[1]];
                        for (i = 0; i < Object.keys(coin).length; i++) {
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
                            delete coin[Object.keys(coin)[i]]["quote"]["USD"]["market_cap_dominance"];
                            delete coin[Object.keys(coin)[i]]["quote"]["USD"]["fully_diluted_market_cap"];
                        }
                        return [2 /*return*/, coin];
                    case 3:
                        error_2 = _b.sent();
                        if (axios_1.default.isAxiosError(error_2)) {
                            return [2 /*return*/, (_a = error_2.response) === null || _a === void 0 ? void 0 : _a.data];
                        }
                        else {
                            throw "Unknow Exception";
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MicroAPI.prototype.cryptoList = function (symbol) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var url, response, handle_resp, coin, i, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        url = "cryptocurrency/listings/latest?symbol=" + symbol;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.axiosInstance.get(url)];
                    case 2:
                        response = _b.sent();
                        handle_resp = response.data;
                        coin = handle_resp[Object.keys(handle_resp)[1]];
                        for (i = 0; i < Object.keys(coin).length; i++) {
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
                        return [2 /*return*/, coin];
                    case 3:
                        error_3 = _b.sent();
                        if (axios_1.default.isAxiosError(error_3)) {
                            return [2 /*return*/, (_a = error_3.response) === null || _a === void 0 ? void 0 : _a.data];
                        }
                        else {
                            throw "Unknow Exception";
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MicroAPI.prototype.priceConversion = function (amount, symbol, convert) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var url, response, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        url = "tools/price-conversion?amount=" + amount + "&symbol=" + symbol + "&convert=" + convert;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.axiosInstance.get(url)];
                    case 2:
                        response = _b.sent();
                        return [2 /*return*/, response.data];
                    case 3:
                        error_4 = _b.sent();
                        if (axios_1.default.isAxiosError(error_4)) {
                            return [2 /*return*/, (_a = error_4.response) === null || _a === void 0 ? void 0 : _a.data];
                        }
                        else {
                            throw "Unknow Exception";
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return MicroAPI;
}());
exports.MicroAPI = MicroAPI;
