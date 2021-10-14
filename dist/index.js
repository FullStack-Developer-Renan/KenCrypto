"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicroAPI = void 0;
var microapi_1 = require("./microapi");
var microapi_2 = require("./microapi");
Object.defineProperty(exports, "MicroAPI", { enumerable: true, get: function () { return microapi_2.MicroAPI; } });
var microAPI = new microapi_1.MicroAPI();
microAPI.cryptoCurrency(["GBP"]).then(function (response) {
    console.log(response);
});
