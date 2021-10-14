import { MicroAPI } from "./microapi";

export { MicroAPI } from "./microapi";

let microAPI: MicroAPI = new MicroAPI();

microAPI.cryptoCurrency(["GBP"]).then((response) => {
  console.log(response);
});
